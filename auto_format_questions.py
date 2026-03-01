#!/usr/bin/env python3
"""
DP-700 Exam Question Auto-Formatter
Monitors clipboard and automatically formats pasted exam questions into questions.md
"""

import os
import sys
import time
import re
import json
from datetime import datetime

try:
    import pyperclip
except ImportError:
    pyperclip = None

class QuestionFormatter:
    def __init__(self, questions_file="questions.md"):
        self.questions_file = questions_file
        self.last_clipboard = ""
        self.capture_mode = False
        
        if pyperclip is None:
            print("⚠️  Warning: pyperclip not installed")
            print("Install with: pip install pyperclip")
            print("\nYou can still manually copy-paste and I'll format it.")

    def get_clipboard(self):
        """Get clipboard content"""
        if pyperclip:
            try:
                return pyperclip.paste()
            except:
                return ""
        return ""

    def format_question(self, raw_text, question_num):
        """
        Format raw question text into markdown format
        Tries to auto-detect question structure
        """
        
        # Split by lines
        lines = raw_text.strip().split('\n')
        
        # Extract question and options
        question_text = ""
        options = {}
        option_letters = ['A', 'B', 'C', 'D']
        current_option = 0
        
        # Parse the text
        for line in lines:
            line = line.strip()
            if not line:
                continue
            
            # Check if this is an option (starts with A), B), etc.)
            if re.match(r'^[A-D]\)', line):
                letter = line[0]
                option_text = line[2:].strip()
                options[letter] = option_text
            elif re.match(r'^[A-D]\s', line):
                letter = line[0]
                option_text = line[2:].strip()
                options[letter] = option_text
            else:
                # Assume it's question text
                if not question_text:
                    question_text = line
                else:
                    question_text += " " + line
        
        # Build markdown
        markdown = f"## Question {question_num}\n"
        markdown += f"**Category:** [TODO - Categorize]\n"
        markdown += f"**Difficulty:** [Easy/Medium/Hard]\n"
        markdown += f"**Type:** Multiple Choice\n\n"
        markdown += f"**Question:**\n{question_text}\n\n"
        markdown += f"**Options:**\n"
        
        # Add options
        for letter in ['A', 'B', 'C', 'D']:
            if letter in options:
                markdown += f"- [ ] {letter}) {options[letter]}\n"
        
        markdown += f"\n**Correct Answer:** [TODO - Check your exam results]\n\n"
        markdown += f"**Explanation:**\n[TODO - Add explanation]\n\n"
        markdown += f"**Source:** Microsoft Official Practice Assessment\n\n"
        markdown += "---\n\n"
        
        return markdown

    def append_to_file(self, content):
        """Append formatted question to questions.md"""
        try:
            with open(self.questions_file, 'a', encoding='utf-8') as f:
                f.write(content)
            return True
        except Exception as e:
            print(f"❌ Error writing to file: {e}")
            return False

    def manual_input_mode(self):
        """Allow manual input of questions"""
        print("\n" + "="*70)
        print("DP-700 QUESTION AUTO-FORMATTER - Manual Input Mode")
        print("="*70)
        print("\nPaste exam questions one at a time. Format:")
        print("Question text here?")
        print("A) Option A")
        print("B) Option B")
        print("C) Option C")
        print("D) Option D")
        print("\nType 'done' when finished\n")
        
        question_num = self._get_next_question_number()
        count = 0
        
        while True:
            print(f"\n📝 Paste Question #{question_num} (or type 'done'/'skip'):")
            raw_text = ""
            
            try:
                # Read until user enters 'done' on new line
                lines = []
                while True:
                    line = input()
                    if line.lower() == 'done':
                        break
                    if line.lower() == 'skip':
                        raw_text = None
                        break
                    lines.append(line)
                
                if raw_text is None and line.lower() == 'skip':
                    print(f"⏭️  Skipped Question #{question_num}")
                    question_num += 1
                    continue
                elif line.lower() == 'done':
                    break
                else:
                    raw_text = '\n'.join(lines)
            except EOFError:
                break
            
            if raw_text and len(raw_text) > 20:
                # Format the question
                formatted = self.format_question(raw_text, question_num)
                
                # Show preview
                print("\n📋 Preview:")
                print(formatted)
                
                # Confirm
                confirm = input("Save this question? (yes/no/edit): ").strip().lower()
                
                if confirm == 'yes':
                    if self.append_to_file(formatted):
                        print(f"✅ Question #{question_num} saved!")
                        count += 1
                        question_num += 1
                    else:
                        print("❌ Failed to save")
                elif confirm == 'edit':
                    print("Manually edit in: " + self.questions_file)
                    break
                # else: skip
        
        print(f"\n✅ Saved {count} questions to {self.questions_file}")
        print("\n💡 Next steps:")
        print("1. Open questions.md in VS Code")
        print("2. Fill in [TODO] sections with correct answers and explanations")
        print("3. Run: python exam_simulator.py")

    def clipboard_monitor_mode(self):
        """Monitor clipboard for new content"""
        if not pyperclip:
            print("⚠️  pyperclip required for clipboard monitoring")
            print("Install: pip install pyperclip")
            print("\nUsing manual input mode instead...")
            self.manual_input_mode()
            return
        
        print("\n" + "="*70)
        print("DP-700 QUESTION AUTO-FORMATTER - Clipboard Monitor Mode")
        print("="*70)
        print("\n📌 Monitoring clipboard...")
        print("As you copy questions during your exam, they'll be auto-formatted!")
        print("\nCommands:")
        print("  - Paste: Automatically detects and formats questions")
        print("  - Type 'm': Switch to manual input")
        print("  - Type 'q': Quit\n")
        
        question_num = self._get_next_question_number()
        count = 0
        
        try:
            while True:
                current_clipboard = self.get_clipboard()
                
                # Check if clipboard changed
                if current_clipboard != self.last_clipboard and len(current_clipboard) > 50:
                    self.last_clipboard = current_clipboard
                    
                    # Check if it looks like an exam question
                    if self._looks_like_question(current_clipboard):
                        print(f"\n🎯 New question detected! (#{question_num})")
                        
                        # Format it
                        formatted = self.format_question(current_clipboard, question_num)
                        
                        # Show preview
                        print("\n📋 Preview:")
                        preview_lines = formatted.split('\n')[:10]
                        for line in preview_lines:
                            print(line)
                        print("...\n")
                        
                        # Ask to save
                        response = input("Save? (yes/no/manual/quit): ").strip().lower()
                        
                        if response == 'yes':
                            if self.append_to_file(formatted):
                                print(f"✅ Saved as Question #{question_num}")
                                count += 1
                                question_num += 1
                        elif response == 'manual':
                            self.manual_input_mode()
                            break
                        elif response == 'quit':
                            break
                        else:
                            print("⏭️  Skipped")
                
                time.sleep(1)  # Check clipboard once per second
        
        except KeyboardInterrupt:
            print(f"\n\n✅ Saved {count} questions to {self.questions_file}")
            print("Exiting...")

    def _get_next_question_number(self):
        """Get the next question number from current file"""
        try:
            with open(self.questions_file, 'r', encoding='utf-8') as f:
                content = f.read()
                matches = re.findall(r'## Question (\d+)', content)
                if matches:
                    return int(matches[-1]) + 1
        except:
            pass
        return 1

    def _looks_like_question(self, text):
        """Check if text looks like an exam question"""
        # Should have question mark and some options
        has_question_mark = '?' in text
        has_options = bool(re.search(r'^[A-D]\)', text, re.MULTILINE))
        has_length = len(text) > 50
        
        return has_question_mark and has_options and has_length


def main():
    formatter = QuestionFormatter()
    
    print("\n" + "="*70)
    print("DP-700 EXAM QUESTION AUTO-FORMATTER")
    print("="*70)
    print("\nChoose mode:")
    print("1) Clipboard Monitor (auto-detects when you copy)")
    print("2) Manual Input (type/paste questions one by one)")
    print("3) Exit")
    
    choice = input("\nChoice (1-3): ").strip()
    
    if choice == '1':
        formatter.clipboard_monitor_mode()
    elif choice == '2':
        formatter.manual_input_mode()
    else:
        print("Exiting...")


if __name__ == "__main__":
    main()

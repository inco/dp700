#!/usr/bin/env python3
"""
DP-700 Exam Simulator
A local exam emulator that mimics the real Microsoft DP-700 exam experience
"""

import os
import json
import random
import time
import re
from datetime import datetime
from pathlib import Path

class ExamSimulator:
    def __init__(self, questions_file="questions.md"):
        self.questions_file = questions_file
        self.questions = []
        self.current_answers = {}
        self.marked_for_review = set()
        self.exam_start_time = None
        self.exam_duration = 120 * 60  # 120 minutes in seconds
        self.scores_file = "exam_scores.json"
        self.load_questions()

    def load_questions(self):
        """Parse questions from markdown file"""
        if not os.path.exists(self.questions_file):
            print(f"Error: {self.questions_file} not found!")
            return

        with open(self.questions_file, 'r') as f:
            content = f.read()

        # Split by question headers
        question_blocks = re.split(r'## Question \d+\n', content)[1:]

        for block in question_blocks:
            question_data = self._parse_question_block(block)
            if question_data:
                self.questions.append(question_data)

        print(f"✅ Loaded {len(self.questions)} questions")

    def _parse_question_block(self, block):
        """Parse a single question block from markdown"""
        try:
            lines = block.strip().split('\n')
            
            # Extract metadata
            category = ""
            difficulty = ""
            question_text = ""
            options = {}
            correct_answer = ""
            explanation = ""
            source = ""
            
            i = 0
            while i < len(lines):
                line = lines[i].strip()
                
                if line.startswith("**Category:**"):
                    category = line.replace("**Category:**", "").strip()
                elif line.startswith("**Difficulty:**"):
                    difficulty = line.replace("**Difficulty:**", "").strip()
                elif line.startswith("**Question:**"):
                    i += 1
                    question_text = lines[i].strip() if i < len(lines) else ""
                elif line.startswith("- [ ] A)"):
                    options['A'] = line.replace("- [ ] A)", "").strip()
                elif line.startswith("- [ ] B)"):
                    options['B'] = line.replace("- [ ] B)", "").strip()
                elif line.startswith("- [ ] C)"):
                    options['C'] = line.replace("- [ ] C)", "").strip()
                elif line.startswith("- [ ] D)"):
                    options['D'] = line.replace("- [ ] D)", "").strip()
                elif line.startswith("**Correct Answer:**"):
                    correct_answer = line.replace("**Correct Answer:**", "").strip()
                elif line.startswith("**Explanation:**"):
                    i += 1
                    explanation = lines[i].strip() if i < len(lines) else ""
                elif line.startswith("**Source:**"):
                    source = line.replace("**Source:**", "").strip()
                
                i += 1

            if question_text and options and correct_answer:
                return {
                    'category': category,
                    'difficulty': difficulty,
                    'question': question_text,
                    'options': options,
                    'correct_answer': correct_answer,
                    'explanation': explanation,
                    'source': source
                }
        except Exception as e:
            print(f"Error parsing question block: {e}")
        
        return None

    def start_exam(self):
        """Start the exam"""
        print("\n" + "="*70)
        print("DP-700 EXAM SIMULATOR - Implementing Data Engineering Solutions Using Microsoft Fabric")
        print("="*70)
        print(f"\n📋 Exam Details:")
        print(f"   • Total Questions: {len(self.questions)}")
        print(f"   • Duration: 120 minutes")
        print(f"   • Passing Score: 700 (out of 1000)")
        print(f"   • Format: Multiple Choice")
        print(f"\n⏱️  Your exam starts in 5 seconds... Get ready!")
        print("\nCommands during exam:")
        print("   - Type your answer (A/B/C/D)")
        print("   - Type 'mark' to mark for review")
        print("   - Type 'skip' to skip question")
        print("   - Type 'time' to see remaining time")
        print("   - Type 'quit' to end exam early")
        
        input("\nPress Enter to start...")
        
        self.exam_start_time = time.time()
        
        # Randomize question order
        shuffled_questions = list(enumerate(self.questions))
        random.shuffle(shuffled_questions)
        
        question_number = 1
        for original_idx, question in shuffled_questions:
            if not self._ask_question(question, question_number, len(self.questions)):
                break
            question_number += 1

        self._finish_exam()

    def _ask_question(self, question, question_num, total_questions):
        """Ask a single question"""
        elapsed = time.time() - self.exam_start_time
        remaining = self.exam_duration - elapsed
        remaining_minutes = int(remaining // 60)
        remaining_seconds = int(remaining % 60)

        print(f"\n{'='*70}")
        print(f"Question {question_num}/{total_questions} | ⏱️  {remaining_minutes:02d}:{remaining_seconds:02d} remaining")
        print(f"Category: {question['category']} | Difficulty: {question['difficulty']}")
        print(f"{'='*70}")
        
        print(f"\n{question['question']}\n")
        
        for option, text in question['options'].items():
            print(f"   {option}) {text}")
        
        while True:
            user_input = input("\nYour answer (A/B/C/D) or command [mark/skip/time/quit]: ").strip().upper()
            
            if user_input == 'QUIT':
                confirm = input("Are you sure you want to quit the exam? (yes/no): ").strip().lower()
                if confirm == 'yes':
                    return False
                continue
            
            elif user_input == 'MARK':
                self.marked_for_review.add(question_num)
                print("✅ Question marked for review")
                continue
            
            elif user_input == 'SKIP':
                print("⏭️  Skipping question...")
                return True
            
            elif user_input == 'TIME':
                print(f"⏱️  Time remaining: {remaining_minutes:02d}:{remaining_seconds:02d}")
                continue
            
            elif user_input in ['A', 'B', 'C', 'D']:
                self.current_answers[question_num] = user_input
                is_correct = user_input == question['correct_answer']
                
                if is_correct:
                    print("✅ Correct!")
                else:
                    print(f"❌ Incorrect. The correct answer is {question['correct_answer']}")
                
                return True
            else:
                print("❌ Invalid input. Please enter A, B, C, D, mark, skip, time, or quit")

    def _finish_exam(self):
        """Calculate and display exam results"""
        print(f"\n{'='*70}")
        print("EXAM COMPLETE")
        print(f"{'='*70}\n")
        
        # Calculate score
        correct_count = 0
        total_answered = len(self.current_answers)
        
        for question_num, answer in self.current_answers.items():
            if answer == self.questions[question_num - 1]['correct_answer']:
                correct_count += 1
        
        # Score calculation (out of 1000, similar to actual exam)
        percentage = (correct_count / total_answered * 100) if total_answered > 0 else 0
        score = int(percentage * 10)  # Convert percentage to 0-1000 scale
        
        print(f"📊 RESULTS:")
        print(f"   Questions Answered: {total_answered}/{len(self.questions)}")
        print(f"   Correct: {correct_count}/{total_answered}")
        print(f"   Percentage: {percentage:.1f}%")
        print(f"   Score: {score}/1000")
        print(f"   Status: {'✅ PASSED' if score >= 700 else '❌ NOT PASSED'}")
        print(f"   Marked for Review: {len(self.marked_for_review)}")
        
        # Save score
        self._save_score(score, percentage, correct_count, total_answered)
        
        # Offer review
        if input("\n📖 Review answers? (yes/no): ").strip().lower() == 'yes':
            self._review_answers()
        
        # Show score history
        if input("\n📈 View score history? (yes/no): ").strip().lower() == 'yes':
            self._show_score_history()

    def _save_score(self, score, percentage, correct, total):
        """Save exam score to file"""
        scores = {}
        if os.path.exists(self.scores_file):
            with open(self.scores_file, 'r') as f:
                scores = json.load(f)
        
        timestamp = datetime.now().isoformat()
        exam_id = f"exam_{int(time.time())}"
        
        scores[exam_id] = {
            'timestamp': timestamp,
            'score': score,
            'percentage': percentage,
            'correct': correct,
            'total': total,
            'passed': score >= 700
        }
        
        with open(self.scores_file, 'w') as f:
            json.dump(scores, f, indent=2)
        
        print(f"✅ Score saved to {self.scores_file}")

    def _review_answers(self):
        """Review all answers after exam"""
        print(f"\n{'='*70}")
        print("ANSWER REVIEW")
        print(f"{'='*70}\n")
        
        for question_num, answer in sorted(self.current_answers.items()):
            question = self.questions[question_num - 1]
            is_correct = answer == question['correct_answer']
            
            print(f"\nQuestion {question_num}:")
            print(f"{question['question']}\n")
            print(f"Your answer: {answer} - {is_correct and '✅ CORRECT' or '❌ INCORRECT'}")
            print(f"Correct answer: {question['correct_answer']}")
            print(f"Explanation: {question['explanation']}")
            print("-" * 70)

    def _show_score_history(self):
        """Display score history"""
        if not os.path.exists(self.scores_file):
            print("No score history yet")
            return
        
        with open(self.scores_file, 'r') as f:
            scores = json.load(f)
        
        if not scores:
            print("No score history yet")
            return
        
        print(f"\n{'='*70}")
        print("SCORE HISTORY")
        print(f"{'='*70}\n")
        print(f"{'Date':<25} {'Score':<10} {'%':<8} {'Correct':<12} {'Status':<10}")
        print("-" * 70)
        
        for exam_id in sorted(scores.keys()):
            exam = scores[exam_id]
            date = exam['timestamp'].split('T')[0]
            status = "✅ PASS" if exam['passed'] else "❌ FAIL"
            print(f"{date:<25} {exam['score']:<10} {exam['percentage']:<8.1f} {exam['correct']}/{exam['total']:<10} {status:<10}")
        
        # Stats
        passed = sum(1 for e in scores.values() if e['passed'])
        avg_score = sum(e['score'] for e in scores.values()) / len(scores)
        print("-" * 70)
        print(f"Total Exams: {len(scores)} | Passed: {passed} | Avg Score: {avg_score:.0f}")


def main():
    """Main entry point"""
    simulator = ExamSimulator("questions.md")
    
    while True:
        print("\n" + "="*70)
        print("DP-700 EXAM SIMULATOR")
        print("="*70)
        print("\n1) Start New Exam")
        print("2) View Score History")
        print("3) Edit Questions Database")
        print("4) Exit")
        
        choice = input("\nChoose option (1-4): ").strip()
        
        if choice == '1':
            simulator.start_exam()
        elif choice == '2':
            simulator._show_score_history()
        elif choice == '3':
            print(f"\n📝 Open {simulator.questions_file} in your text editor to add/edit questions")
            print("Format template:")
            print("""
## Question [N]
**Category:** [Category Name]
**Difficulty:** Easy/Medium/Hard
**Type:** Multiple Choice

**Question:**
[Your question]

**Options:**
- [ ] A) [Option A]
- [ ] B) [Option B]
- [ ] C) [Option C]
- [ ] D) [Option D]

**Correct Answer:** [A/B/C/D]

**Explanation:**
[Explanation]

**Source:** [Source]
            """)
        elif choice == '4':
            print("Goodbye!")
            break
        else:
            print("❌ Invalid choice")


if __name__ == "__main__":
    main()

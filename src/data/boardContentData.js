export const boardContentData = {
  "Federal Board of Intermediate and Secondary Education (FBISE)": {
    publisher: "National Book Foundation (NBF) & Federal Directorate of Education (FDE)",
    textbookSource: "https://www.fbise.edu.pk",
    subjects: [
      // Classes 1-5
      { id: 1, name: "English", icon: "📚", classes: "1-5" },
      { id: 2, name: "Urdu", icon: "🔤", classes: "1-5" },
      { id: 3, name: "Mathematics", icon: "📐", classes: "1-5" },
      { id: 4, name: "General Knowledge / Science", icon: "🔬", classes: "1-5" },
      { id: 5, name: "Islamiat (or Ethics)", icon: "📖", classes: "1-5" },
      { id: 6, name: "Computer", icon: "💻", classes: "1-5" },
      // Classes 6-8
      { id: 7, name: "General Science", icon: "🧪", classes: "6-8" },
      { id: 8, name: "Social Studies / Pakistan Studies", icon: "🗺️", classes: "6-8" },
      { id: 9, name: "Computer Studies", icon: "💻", classes: "6-8" },
      // Classes 9-10
      { id: 10, name: "Physics", icon: "⚛️", classes: "9-10" },
      { id: 11, name: "Chemistry", icon: "🧪", classes: "9-10" },
      { id: 12, name: "Biology / Computer Science", icon: "🧬", classes: "9-10" },
      { id: 13, name: "Optional: Economics, Civics, Education, Arabic", icon: "📚", classes: "9-10" }
    ],
    books: [
      { id: 1, title: "Physics Textbook", subject: "Physics", classes: "9-10", author: "FBISE" },
      { id: 2, title: "Chemistry Textbook", subject: "Chemistry", classes: "9-10", author: "FBISE" },
      { id: 3, title: "Biology Textbook", subject: "Biology", classes: "9-10", author: "FBISE" },
      { id: 4, title: "English Textbook", subject: "English", classes: "9-10", author: "FBISE" },
      { id: 5, title: "Urdu Textbook", subject: "Urdu", classes: "9-10", author: "FBISE" },
      { id: 6, title: "Mathematics Textbook", subject: "Mathematics", classes: "9-10", author: "FBISE" },
      { id: 7, title: "Islamic Studies Textbook", subject: "Islamic Studies", classes: "9-10", author: "FBISE" },
      { id: 8, title: "Computer Science Textbook", subject: "Computer Science", classes: "9-10", author: "FBISE" }
    ],
    pastPapers: [
      { id: 1, year: 2023, term: "Final", subjects: 8, classes: "9-10" },
      { id: 2, year: 2023, term: "Midterm", subjects: 8, classes: "9-10" },
      { id: 3, year: 2022, term: "Final", subjects: 8, classes: "9-10" },
      { id: 4, year: 2022, term: "Midterm", subjects: 8, classes: "9-10" },
      { id: 5, year: 2021, term: "Final", subjects: 8, classes: "9-10" },
      { id: 6, year: 2021, term: "Midterm", subjects: 8, classes: "9-10" },
      { id: 7, year: 2020, term: "Final", subjects: 8, classes: "9-10" }
    ],
    guides: [
      { id: 1, title: "Classes 1-5 Curriculum Guide", subject: "Primary", level: "Classes 1-5" },
      { id: 2, title: "Classes 6-8 Curriculum Guide", subject: "Middle", level: "Classes 6-8" },
      { id: 3, title: "Classes 9-10 Science Group Guide", subject: "Secondary", level: "Classes 9-10" },
      { id: 4, title: "English Language Guide", subject: "English", level: "All Classes" },
      { id: 5, title: "Mathematics Study Guide", subject: "Mathematics", level: "All Classes" },
      { id: 6, title: "Physics Exam Preparation Guide", subject: "Physics", level: "Classes 9-10" },
      { id: 7, title: "Chemistry Exam Preparation Guide", subject: "Chemistry", level: "Classes 9-10" },
      { id: 8, title: "Biology Exam Preparation Guide", subject: "Biology", level: "Classes 9-10" }
    ]
  },
  "BISE Lahore": {
    publisher: "Punjab Curriculum and Textbook Board (PCTB)",
    textbookSource: "https://pctb.punjab.gov.pk/ebooks",
    subjects: [
      // Classes 1-5
      { id: 1, name: "English", icon: "📚", classes: "1-5" },
      { id: 2, name: "Urdu", icon: "🔤", classes: "1-5" },
      { id: 3, name: "Mathematics", icon: "📐", classes: "1-5" },
      { id: 4, name: "General Knowledge", icon: "🔬", classes: "1-5" },
      { id: 5, name: "Islamiat / Ethics", icon: "📖", classes: "1-5" },
      { id: 6, name: "Nazra Quran", icon: "📖", classes: "1-5" },
      // Classes 6-8
      { id: 7, name: "General Science", icon: "🧪", classes: "6-8" },
      { id: 8, name: "Social Studies", icon: "🗺️", classes: "6-8" },
      { id: 9, name: "Computer Education", icon: "💻", classes: "6-8" },
      // Classes 9-10 Science
      { id: 10, name: "Physics", icon: "⚛️", classes: "9-10 (Science)" },
      { id: 11, name: "Chemistry", icon: "🧪", classes: "9-10 (Science)" },
      { id: 12, name: "Biology / Computer Science", icon: "🧬", classes: "9-10 (Science)" },
      // Classes 9-10 Arts
      { id: 13, name: "General Math", icon: "📐", classes: "9-10 (Arts)" },
      { id: 14, name: "General Science", icon: "🔬", classes: "9-10 (Arts)" },
      { id: 15, name: "Civics / Education / Economics / Home Economics / History", icon: "📚", classes: "9-10 (Arts)" }
    ],
    books: [
      { id: 1, title: "Physics Textbook", subject: "Physics", classes: "9-10 (Science)", author: "PCTB" },
      { id: 2, title: "Chemistry Textbook", subject: "Chemistry", classes: "9-10 (Science)", author: "PCTB" },
      { id: 3, title: "Biology Textbook", subject: "Biology", classes: "9-10 (Science)", author: "PCTB" },
      { id: 4, title: "General Math Textbook", subject: "General Math", classes: "9-10 (Arts)", author: "PCTB" },
      { id: 5, title: "General Science Textbook", subject: "General Science", classes: "9-10 (Arts)", author: "PCTB" },
      { id: 6, title: "English Textbook", subject: "English", classes: "9-10", author: "PCTB" },
      { id: 7, title: "Urdu Textbook", subject: "Urdu", classes: "9-10", author: "PCTB" },
      { id: 8, title: "Islamic Studies Textbook", subject: "Islamic Studies", classes: "9-10", author: "PCTB" }
    ],
    pastPapers: [
      { id: 1, year: 2023, term: "Final", subjects: 8, classes: "9-10" },
      { id: 2, year: 2023, term: "Midterm", subjects: 8, classes: "9-10" },
      { id: 3, year: 2022, term: "Final", subjects: 8, classes: "9-10" },
      { id: 4, year: 2022, term: "Midterm", subjects: 8, classes: "9-10" },
      { id: 5, year: 2021, term: "Final", subjects: 8, classes: "9-10" },
      { id: 6, year: 2021, term: "Midterm", subjects: 8, classes: "9-10" }
    ],
    guides: [
      { id: 1, title: "Classes 1-5 Curriculum Guide", subject: "Primary", level: "Classes 1-5" },
      { id: 2, title: "Classes 6-8 Curriculum Guide", subject: "Middle", level: "Classes 6-8" },
      { id: 3, title: "Classes 9-10 Science Group Guide", subject: "Secondary", level: "Classes 9-10" },
      { id: 4, title: "Classes 9-10 Arts Group Guide", subject: "Secondary", level: "Classes 9-10" },
      { id: 5, title: "Physics Exam Preparation Guide", subject: "Physics", level: "Classes 9-10" },
      { id: 6, title: "Chemistry Exam Preparation Guide", subject: "Chemistry", level: "Classes 9-10" },
      { id: 7, title: "Biology Exam Preparation Guide", subject: "Biology", level: "Classes 9-10" },
      { id: 8, title: "English Language Guide", subject: "English", level: "Classes 9-10" }
    ]
  },
  "BISE Rawalpindi": {
    publisher: "Punjab Curriculum and Textbook Board (PCTB)",
    textbookSource: "https://pctb.punjab.gov.pk/ebooks",
    subjects: [
      { id: 1, name: "English", icon: "📚", classes: "1-10" },
      { id: 2, name: "Urdu", icon: "🔤", classes: "1-10" },
      { id: 3, name: "Mathematics", icon: "📐", classes: "1-10" },
      { id: 4, name: "Science", icon: "🧪", classes: "1-10" },
      { id: 5, name: "Social Studies", icon: "🗺️", classes: "1-10" },
      { id: 6, name: "Islamiat / Ethics", icon: "📖", classes: "1-10" },
      { id: 7, name: "Computer Studies", icon: "💻", classes: "6-10" },
      { id: 8, name: "Physics", icon: "⚛️", classes: "9-10" },
      { id: 9, name: "Chemistry", icon: "🧪", classes: "9-10" },
      { id: 10, name: "Biology", icon: "🧬", classes: "9-10" }
    ],
    books: [
      { id: 1, title: "English Textbook", subject: "English", classes: "9-10", author: "PCTB" },
      { id: 2, title: "Urdu Textbook", subject: "Urdu", classes: "9-10", author: "PCTB" },
      { id: 3, title: "Mathematics Textbook", subject: "Mathematics", classes: "9-10", author: "PCTB" },
      { id: 4, title: "Physics Textbook", subject: "Physics", classes: "9-10", author: "PCTB" },
      { id: 5, title: "Chemistry Textbook", subject: "Chemistry", classes: "9-10", author: "PCTB" },
      { id: 6, title: "Biology Textbook", subject: "Biology", classes: "9-10", author: "PCTB" },
      { id: 7, title: "Science Textbook", subject: "Science", classes: "9-10", author: "PCTB" },
      { id: 8, title: "Social Studies Textbook", subject: "Social Studies", classes: "9-10", author: "PCTB" }
    ],
    pastPapers: [
      { id: 1, year: 2023, term: "Final", subjects: 8, classes: "9-10" },
      { id: 2, year: 2023, term: "Midterm", subjects: 8, classes: "9-10" },
      { id: 3, year: 2022, term: "Final", subjects: 8, classes: "9-10" },
      { id: 4, year: 2022, term: "Midterm", subjects: 8, classes: "9-10" },
      { id: 5, year: 2021, term: "Final", subjects: 8, classes: "9-10" }
    ],
    guides: [
      { id: 1, title: "Primary Classes Guide", subject: "General", level: "Classes 1-5" },
      { id: 2, title: "Middle Classes Guide", subject: "General", level: "Classes 6-8" },
      { id: 3, title: "Secondary Classes Guide", subject: "General", level: "Classes 9-10" },
      { id: 4, title: "Physics Exam Preparation Guide", subject: "Physics", level: "Classes 9-10" },
      { id: 5, title: "Chemistry Exam Preparation Guide", subject: "Chemistry", level: "Classes 9-10" },
      { id: 6, title: "Biology Exam Preparation Guide", subject: "Biology", level: "Classes 9-10" },
      { id: 7, title: "Mathematics Study Guide", subject: "Mathematics", level: "Classes 9-10" }
    ]
  },
  "BISE Karachi": {
    publisher: "Sindh Textbook Board (STBB)",
    textbookSource: "https://stbb.edu.pk",
    subjects: [
      // Classes 1-5
      { id: 1, name: "English", icon: "📚", classes: "1-5" },
      { id: 2, name: "Urdu / Sindhi", icon: "🔤", classes: "1-5" },
      { id: 3, name: "Mathematics", icon: "📐", classes: "1-5" },
      { id: 4, name: "General Knowledge", icon: "🔬", classes: "1-5" },
      { id: 5, name: "Islamiat / Ethics", icon: "📖", classes: "1-5" },
      // Classes 6-8
      { id: 6, name: "Science", icon: "🧪", classes: "6-8" },
      { id: 7, name: "Social Studies", icon: "🗺️", classes: "6-8" },
      // Classes 9-10 Science
      { id: 8, name: "Physics", icon: "⚛️", classes: "9-10 (Science)" },
      { id: 9, name: "Chemistry", icon: "🧪", classes: "9-10 (Science)" },
      { id: 10, name: "Biology / Computer Science", icon: "🧬", classes: "9-10 (Science)" },
      // Classes 9-10 Arts
      { id: 11, name: "General Math", icon: "📐", classes: "9-10 (Arts)" },
      { id: 12, name: "General Science", icon: "🔬", classes: "9-10 (Arts)" },
      { id: 13, name: "Civics / Geography / History", icon: "📚", classes: "9-10 (Arts)" }
    ],
    books: [
      { id: 1, title: "Physics Textbook", subject: "Physics", classes: "9-10 (Science)", author: "STBB" },
      { id: 2, title: "Chemistry Textbook", subject: "Chemistry", classes: "9-10 (Science)", author: "STBB" },
      { id: 3, title: "Biology Textbook", subject: "Biology", classes: "9-10 (Science)", author: "STBB" },
      { id: 4, title: "General Math Textbook", subject: "General Math", classes: "9-10 (Arts)", author: "STBB" },
      { id: 5, title: "General Science Textbook", subject: "General Science", classes: "9-10 (Arts)", author: "STBB" },
      { id: 6, title: "English Textbook", subject: "English", classes: "9-10", author: "STBB" },
      { id: 7, title: "Urdu Textbook", subject: "Urdu", classes: "9-10", author: "STBB" },
      { id: 8, title: "Islamic Studies Textbook", subject: "Islamic Studies", classes: "9-10", author: "STBB" }
    ],
    pastPapers: [
      { id: 1, year: 2023, term: "Final", subjects: 8, classes: "9-10" },
      { id: 2, year: 2023, term: "Midterm", subjects: 8, classes: "9-10" },
      { id: 3, year: 2022, term: "Final", subjects: 8, classes: "9-10" },
      { id: 4, year: 2022, term: "Midterm", subjects: 8, classes: "9-10" },
      { id: 5, year: 2021, term: "Final", subjects: 8, classes: "9-10" }
    ],
    guides: [
      { id: 1, title: "Sindh Board Curriculum Overview", subject: "General", level: "All Classes" },
      { id: 2, title: "Science Group Study Guide", subject: "Science", level: "Classes 9-10" },
      { id: 3, title: "Arts Group Study Guide", subject: "Arts", level: "Classes 9-10" },
      { id: 4, title: "Physics Exam Preparation Guide", subject: "Physics", level: "Classes 9-10" },
      { id: 5, title: "Chemistry Exam Preparation Guide", subject: "Chemistry", level: "Classes 9-10" },
      { id: 6, title: "Biology Exam Preparation Guide", subject: "Biology", level: "Classes 9-10" },
      { id: 7, title: "English Language Guide", subject: "English", level: "Classes 9-10" }
    ]
  },
  "BISE Peshawar": {
    publisher: "Khyber Pakhtunkhwa Textbook Board (KPTB)",
    textbookSource: "https://kptbb.gov.pk",
    subjects: [
      // Classes 1-5
      { id: 1, name: "English", icon: "📚", classes: "1-5" },
      { id: 2, name: "Urdu", icon: "🔤", classes: "1-5" },
      { id: 3, name: "Mathematics", icon: "📐", classes: "1-5" },
      { id: 4, name: "General Knowledge", icon: "🔬", classes: "1-5" },
      { id: 5, name: "Islamiat / Ethics", icon: "📖", classes: "1-5" },
      // Classes 6-8
      { id: 6, name: "Science", icon: "🧪", classes: "6-8" },
      { id: 7, name: "Social Studies", icon: "🗺️", classes: "6-8" },
      // Classes 9-10 Science
      { id: 8, name: "Physics", icon: "⚛️", classes: "9-10 (Science)" },
      { id: 9, name: "Chemistry", icon: "🧪", classes: "9-10 (Science)" },
      { id: 10, name: "Biology / Computer Science", icon: "🧬", classes: "9-10 (Science)" },
      // Classes 9-10 Arts
      { id: 11, name: "General Math", icon: "📐", classes: "9-10 (Arts)" },
      { id: 12, name: "General Science", icon: "🔬", classes: "9-10 (Arts)" },
      { id: 13, name: "Civics / History / Education", icon: "📚", classes: "9-10 (Arts)" }
    ],
    books: [
      { id: 1, title: "Physics Textbook", subject: "Physics", classes: "9-10 (Science)", author: "KPTB" },
      { id: 2, title: "Chemistry Textbook", subject: "Chemistry", classes: "9-10 (Science)", author: "KPTB" },
      { id: 3, title: "Biology Textbook", subject: "Biology", classes: "9-10 (Science)", author: "KPTB" },
      { id: 4, title: "General Math Textbook", subject: "General Math", classes: "9-10 (Arts)", author: "KPTB" },
      { id: 5, title: "General Science Textbook", subject: "General Science", classes: "9-10 (Arts)", author: "KPTB" },
      { id: 6, title: "English Textbook", subject: "English", classes: "9-10", author: "KPTB" },
      { id: 7, title: "Urdu Textbook", subject: "Urdu", classes: "9-10", author: "KPTB" },
      { id: 8, title: "Islamic Studies Textbook", subject: "Islamic Studies", classes: "9-10", author: "KPTB" }
    ],
    pastPapers: [
      { id: 1, year: 2023, term: "Final", subjects: 8, classes: "9-10" },
      { id: 2, year: 2023, term: "Midterm", subjects: 8, classes: "9-10" },
      { id: 3, year: 2022, term: "Final", subjects: 8, classes: "9-10" },
      { id: 4, year: 2022, term: "Midterm", subjects: 8, classes: "9-10" },
      { id: 5, year: 2021, term: "Final", subjects: 8, classes: "9-10" }
    ],
    guides: [
      { id: 1, title: "KPK Board Curriculum Guide", subject: "General", level: "All Classes" },
      { id: 2, title: "Science Group Study Materials", subject: "Science", level: "Classes 9-10" },
      { id: 3, title: "Arts Group Study Materials", subject: "Arts", level: "Classes 9-10" },
      { id: 4, title: "Physics Exam Preparation Guide", subject: "Physics", level: "Classes 9-10" },
      { id: 5, title: "Chemistry Exam Preparation Guide", subject: "Chemistry", level: "Classes 9-10" },
      { id: 6, title: "Biology Exam Preparation Guide", subject: "Biology", level: "Classes 9-10" },
      { id: 7, title: "Mathematics Study Guide", subject: "Mathematics", level: "Classes 9-10" }
    ]
  },
  "BISE Quetta": {
    publisher: "Balochistan Textbook Board (BTBB)",
    textbookSource: "https://bbiseqta.edu.pk",
    subjects: [
      // Classes 1-5
      { id: 1, name: "English", icon: "📚", classes: "1-5" },
      { id: 2, name: "Urdu", icon: "🔤", classes: "1-5" },
      { id: 3, name: "Mathematics", icon: "📐", classes: "1-5" },
      { id: 4, name: "General Knowledge", icon: "🔬", classes: "1-5" },
      { id: 5, name: "Islamiat", icon: "📖", classes: "1-5" },
      // Classes 6-8
      { id: 6, name: "Science", icon: "🧪", classes: "6-8" },
      { id: 7, name: "Social Studies", icon: "🗺️", classes: "6-8" },
      // Classes 9-10
      { id: 8, name: "Physics", icon: "⚛️", classes: "9-10" },
      { id: 9, name: "Chemistry", icon: "🧪", classes: "9-10" },
      { id: 10, name: "Biology / Computer Science", icon: "🧬", classes: "9-10" }
    ],
    books: [
      { id: 1, title: "Physics Textbook", subject: "Physics", classes: "9-10", author: "BTBB" },
      { id: 2, title: "Chemistry Textbook", subject: "Chemistry", classes: "9-10", author: "BTBB" },
      { id: 3, title: "Biology Textbook", subject: "Biology", classes: "9-10", author: "BTBB" },
      { id: 4, title: "English Textbook", subject: "English", classes: "9-10", author: "BTBB" },
      { id: 5, title: "Urdu Textbook", subject: "Urdu", classes: "9-10", author: "BTBB" },
      { id: 6, title: "Mathematics Textbook", subject: "Mathematics", classes: "9-10", author: "BTBB" },
      { id: 7, title: "Islamic Studies Textbook", subject: "Islamic Studies", classes: "9-10", author: "BTBB" },
      { id: 8, title: "Social Studies Textbook", subject: "Social Studies", classes: "9-10", author: "BTBB" }
    ],
    pastPapers: [
      { id: 1, year: 2023, term: "Final", subjects: 8, classes: "9-10" },
      { id: 2, year: 2023, term: "Midterm", subjects: 8, classes: "9-10" },
      { id: 3, year: 2022, term: "Final", subjects: 8, classes: "9-10" },
      { id: 4, year: 2022, term: "Midterm", subjects: 8, classes: "9-10" },
      { id: 5, year: 2021, term: "Final", subjects: 8, classes: "9-10" }
    ],
    guides: [
      { id: 1, title: "Balochistan Board Curriculum", subject: "General", level: "All Classes" },
      { id: 2, title: "Science Subjects Guide", subject: "Science", level: "Classes 9-10" },
      { id: 3, title: "Physics Exam Preparation Guide", subject: "Physics", level: "Classes 9-10" },
      { id: 4, title: "Chemistry Exam Preparation Guide", subject: "Chemistry", level: "Classes 9-10" },
      { id: 5, title: "Biology Exam Preparation Guide", subject: "Biology", level: "Classes 9-10" },
      { id: 6, title: "English Language Guide", subject: "English", level: "Classes 9-10" }
    ]
  },
  "BISE Mirpur": {
    publisher: "Punjab Curriculum and Textbook Board (PCTB)",
    textbookSource: "https://pctb.punjab.gov.pk/ebooks",
    subjects: [
      { id: 1, name: "English", icon: "📚", classes: "1-10" },
      { id: 2, name: "Urdu", icon: "🔤", classes: "1-10" },
      { id: 3, name: "Mathematics", icon: "📐", classes: "1-10" },
      { id: 4, name: "Science", icon: "🧪", classes: "1-10" },
      { id: 5, name: "Social Studies", icon: "🗺️", classes: "1-10" },
      { id: 6, name: "Islamiat / Ethics", icon: "📖", classes: "1-10" },
      { id: 7, name: "Computer Studies", icon: "💻", classes: "6-10" },
      { id: 8, name: "Physics", icon: "⚛️", classes: "9-10" },
      { id: 9, name: "Chemistry", icon: "🧪", classes: "9-10" },
      { id: 10, name: "Biology", icon: "🧬", classes: "9-10" }
    ],
    books: [
      { id: 1, title: "English Textbook", subject: "English", classes: "9-10", author: "PCTB" },
      { id: 2, title: "Urdu Textbook", subject: "Urdu", classes: "9-10", author: "PCTB" },
      { id: 3, title: "Mathematics Textbook", subject: "Mathematics", classes: "9-10", author: "PCTB" },
      { id: 4, title: "Physics Textbook", subject: "Physics", classes: "9-10", author: "PCTB" },
      { id: 5, title: "Chemistry Textbook", subject: "Chemistry", classes: "9-10", author: "PCTB" },
      { id: 6, title: "Biology Textbook", subject: "Biology", classes: "9-10", author: "PCTB" },
      { id: 7, title: "Science Textbook", subject: "Science", classes: "9-10", author: "PCTB" },
      { id: 8, title: "Social Studies Textbook", subject: "Social Studies", classes: "9-10", author: "PCTB" }
    ],
    pastPapers: [
      { id: 1, year: 2023, term: "Final", subjects: 8, classes: "9-10" },
      { id: 2, year: 2023, term: "Midterm", subjects: 8, classes: "9-10" },
      { id: 3, year: 2022, term: "Final", subjects: 8, classes: "9-10" },
      { id: 4, year: 2022, term: "Midterm", subjects: 8, classes: "9-10" },
      { id: 5, year: 2021, term: "Final", subjects: 8, classes: "9-10" }
    ],
    guides: [
      { id: 1, title: "AJK Curriculum Guide", subject: "General", level: "All Classes" },
      { id: 2, title: "PCTB Syllabus Overview", subject: "General", level: "All Classes" },
      { id: 3, title: "Physics Exam Preparation Guide", subject: "Physics", level: "Classes 9-10" },
      { id: 4, title: "Chemistry Exam Preparation Guide", subject: "Chemistry", level: "Classes 9-10" },
      { id: 5, title: "Biology Exam Preparation Guide", subject: "Biology", level: "Classes 9-10" },
      { id: 6, title: "Mathematics Study Guide", subject: "Mathematics", level: "Classes 9-10" },
      { id: 7, title: "English Language Guide", subject: "English", level: "Classes 9-10" }
    ]
  },
  "BISE Gilgit-Baltistan": {
    publisher: "National Book Foundation (NBF)",
    textbookSource: "https://fbise.edu.pk",
    subjects: [
      { id: 1, name: "English", icon: "📚", classes: "1-10" },
      { id: 2, name: "Urdu", icon: "🔤", classes: "1-10" },
      { id: 3, name: "Mathematics", icon: "📐", classes: "1-10" },
      { id: 4, name: "Science", icon: "🧪", classes: "1-10" },
      { id: 5, name: "Social Studies", icon: "🗺️", classes: "1-10" },
      { id: 6, name: "Islamiat / Ethics", icon: "📖", classes: "1-10" },
      { id: 7, name: "Computer Studies", icon: "💻", classes: "6-10" },
      { id: 8, name: "Physics", icon: "⚛️", classes: "9-10" },
      { id: 9, name: "Chemistry", icon: "🧪", classes: "9-10" },
      { id: 10, name: "Biology", icon: "🧬", classes: "9-10" }
    ],
    books: [
      { id: 1, title: "English Textbook", subject: "English", classes: "9-10", author: "NBF" },
      { id: 2, title: "Urdu Textbook", subject: "Urdu", classes: "9-10", author: "NBF" },
      { id: 3, title: "Mathematics Textbook", subject: "Mathematics", classes: "9-10", author: "NBF" },
      { id: 4, title: "Physics Textbook", subject: "Physics", classes: "9-10", author: "NBF" },
      { id: 5, title: "Chemistry Textbook", subject: "Chemistry", classes: "9-10", author: "NBF" },
      { id: 6, title: "Biology Textbook", subject: "Biology", classes: "9-10", author: "NBF" },
      { id: 7, title: "Science Textbook", subject: "Science", classes: "9-10", author: "NBF" },
      { id: 8, title: "Social Studies Textbook", subject: "Social Studies", classes: "9-10", author: "NBF" }
    ],
    pastPapers: [
      { id: 1, year: 2023, term: "Final", subjects: 8, classes: "9-10" },
      { id: 2, year: 2023, term: "Midterm", subjects: 8, classes: "9-10" },
      { id: 3, year: 2022, term: "Final", subjects: 8, classes: "9-10" },
      { id: 4, year: 2022, term: "Midterm", subjects: 8, classes: "9-10" },
      { id: 5, year: 2021, term: "Final", subjects: 8, classes: "9-10" }
    ],
    guides: [
      { id: 1, title: "FBISE Curriculum Guide", subject: "General", level: "All Classes" },
      { id: 2, title: "Same as Federal Board", subject: "General", level: "All Classes" },
      { id: 3, title: "Physics Exam Preparation Guide", subject: "Physics", level: "Classes 9-10" },
      { id: 4, title: "Chemistry Exam Preparation Guide", subject: "Chemistry", level: "Classes 9-10" },
      { id: 5, title: "Biology Exam Preparation Guide", subject: "Biology", level: "Classes 9-10" },
      { id: 6, title: "Mathematics Study Guide", subject: "Mathematics", level: "Classes 9-10" },
      { id: 7, title: "English Language Guide", subject: "English", level: "Classes 9-10" }
    ]
  },
  "Aga Khan University Examination Board": {
    publisher: "Oxford University Press, Cambridge University Press, Paramount, AKU-EB Resource Packs",
    textbookSource: "https://examinationboard.aku.edu",
    subjects: [
      { id: 1, name: "English", icon: "📚", classes: "6-10" },
      { id: 2, name: "Urdu", icon: "🔤", classes: "6-10" },
      { id: 3, name: "Islamiat", icon: "📖", classes: "6-10" },
      { id: 4, name: "Pakistan Studies", icon: "🗺️", classes: "6-10" },
      { id: 5, name: "Mathematics", icon: "📐", classes: "6-10" },
      { id: 6, name: "Physics", icon: "⚛️", classes: "6-10" },
      { id: 7, name: "Chemistry", icon: "🧪", classes: "6-10" },
      { id: 8, name: "Biology", icon: "🧬", classes: "6-10" },
      { id: 9, name: "Computer Science / Economics / Business Studies", icon: "💻", classes: "6-10" }
    ],
    books: [
      { id: 1, title: "English Textbook", subject: "English", classes: "9-10", author: "Oxford University Press" },
      { id: 2, title: "Urdu Textbook", subject: "Urdu", classes: "9-10", author: "Cambridge University Press" },
      { id: 3, title: "Mathematics Textbook", subject: "Mathematics", classes: "9-10", author: "Paramount" },
      { id: 4, title: "Physics Textbook", subject: "Physics", classes: "9-10", author: "Oxford University Press" },
      { id: 5, title: "Chemistry Textbook", subject: "Chemistry", classes: "9-10", author: "Cambridge University Press" },
      { id: 6, title: "Biology Textbook", subject: "Biology", classes: "9-10", author: "Paramount" },
      { id: 7, title: "Pakistan Studies Textbook", subject: "Pakistan Studies", classes: "9-10", author: "AKU-EB" },
      { id: 8, title: "Islamic Studies Textbook", subject: "Islamic Studies", classes: "9-10", author: "AKU-EB" },
      { id: 9, title: "Computer Science Textbook", subject: "Computer Science", classes: "9-10", author: "Paramount" }
    ],
    pastPapers: [
      { id: 1, year: 2023, term: "Final", subjects: 9, classes: "9-10" },
      { id: 2, year: 2023, term: "Midterm", subjects: 9, classes: "9-10" },
      { id: 3, year: 2022, term: "Final", subjects: 9, classes: "9-10" },
      { id: 4, year: 2022, term: "Midterm", subjects: 9, classes: "9-10" },
      { id: 5, year: 2021, term: "Final", subjects: 9, classes: "9-10" }
    ],
    guides: [
      { id: 1, title: "AKU-EB Curriculum Overview", subject: "General", level: "Classes 6-10" },
      { id: 2, title: "International Standard Study Guide", subject: "General", level: "Classes 6-10" },
      { id: 3, title: "Science Subjects Guide", subject: "Science", level: "Classes 6-10" },
      { id: 4, title: "Physics Exam Preparation Guide", subject: "Physics", level: "Classes 9-10" },
      { id: 5, title: "Chemistry Exam Preparation Guide", subject: "Chemistry", level: "Classes 9-10" },
      { id: 6, title: "Biology Exam Preparation Guide", subject: "Biology", level: "Classes 9-10" },
      { id: 7, title: "Mathematics Study Guide", subject: "Mathematics", level: "Classes 9-10" },
      { id: 8, title: "English Language Guide", subject: "English", level: "Classes 9-10" }
    ]
  }
};

// Default content for boards without specific data
export const getDefaultBoardContent = (boardName) => {
  return {
    subjects: [
      { id: 1, name: "Mathematics", icon: "📐" },
      { id: 2, name: "Physics", icon: "⚛️" },
      { id: 3, name: "Chemistry", icon: "🧪" },
      { id: 4, name: "Biology", icon: "🧬" },
      { id: 5, name: "English", icon: "📚" },
      { id: 6, name: "Urdu", icon: "🔤" }
    ],
    pastPapers: [
      { id: 1, year: 2023, term: "Final", subjects: 6 },
      { id: 2, year: 2022, term: "Final", subjects: 6 }
    ],
    guides: [
      { id: 1, title: "Study Guide", subject: "General", level: "Class 12" }
    ]
  };
};

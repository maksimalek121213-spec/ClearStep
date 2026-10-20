/* ==========================================================================
   MODULE 1: CURRICULUM & STRUCTURED COURSES (R&W + MATH + FOUNDATIONS)
   ========================================================================== */
const COURSES = [
  {
    id: "rw-sat",
    title: { en: "SAT Reading & Writing", ru: "SAT Чтение и Письмо" },
    subtitle: { en: "All 4 official digital SAT domains with worked examples", ru: "Все 4 домена цифрового SAT с разбором примеров" },
    section: "RW",
    units: [
      {
        id: "u-bounds",
        domain: "Standard English Conventions",
        skill: "Sentence boundaries",
        title: { en: "Unit 1: Sentence Boundaries & Punctuation", ru: "Модуль 1: Границы предложений и пунктуация" },
        objectives: {
          en: ["Identify independent vs. dependent clauses", "Eliminate comma splices and fused sentences", "Use semicolons, colons, and dashes accurately"],
          ru: ["Отличать независимые клаузы от зависимых", "Устранять склейку запятой (comma splice)", "Правильно использовать точку с запятой, двоеточие и тире"]
        },
        lesson: {
          summary: {
            en: "An independent clause contains a main subject and a finite verb and can stand alone as a sentence. Two independent clauses cannot be joined with only a comma (a 'comma splice'). To join them legally, use: (1) a period, (2) a semicolon, (3) a comma + FANBOYS coordinating conjunction (for, and, nor, but, or, yet, so), or (4) a colon if the second clause explains or illustrates the first.",
            ru: "Независимая клауза содержит подлежащее и сказуемое и может быть отдельным предложением. Две независимые клаузы нельзя соединять просто запятой (это ошибка comma splice). Используйте: (1) точку, (2) точку с запятой, (3) запятую + сочинительный союз FANBOYS (for, and, nor, but, or, yet, so) или (4) двоеточие, если вторая часть поясняет первую."
          },
          workedExample: {
            prompt: "The glacial core samples were extracted from three kilometers below the surface ___ they preserve atmospheric gases from 800,000 years ago.",
            analysis: {
              en: "Left side: 'The glacial core samples were extracted...' (Independent). Right side: 'they preserve atmospheric gases...' (Independent). A comma alone fails. 'Surface; they' correctly links two closely related independent clauses.",
              ru: "Слева и справа — полные самостоятельные предложения. Одной запятой недостаточно. Вариант с точкой с запятой ('surface; they') грамматически верен."
            }
          }
        }
      },
      {
        id: "u-form",
        domain: "Standard English Conventions",
        skill: "Form, structure, and sense",
        title: { en: "Unit 2: Subject-Verb Agreement, Tense & Modifiers", ru: "Модуль 2: Согласование, времена и модификаторы" },
        objectives: {
          en: ["Locate the true grammatical subject past prepositional phrases", "Match verb tense to timeline markers", "Attach introductory modifiers to the subject immediately following the comma"],
          ru: ["Находить подлежащее, игнорируя предложные обороты", "Согласовывать время глагола с маркерами времени", "Привязывать вводный оборот к подлежащему сразу после запятой"]
        },
        lesson: {
          summary: {
            en: "On the SAT, test writers often place long prepositional phrases ('of rare manuscripts', 'along with the directors') between a singular subject and its verb. Cross out prepositional phrases to see the core subject-verb pair. Additionally, when a sentence starts with a participial phrase ('Walking through the archive, ...'), the noun right after the comma MUST be the person or thing doing that action.",
            ru: "В вопросах SAT между подлежащим и сказуемым часто вставляют длинные уточняющие обороты ('of rare manuscripts'). Мысленно вычеркните их, чтобы проверить число глагола. А если предложение начинается с деепричастного оборота, сразу после запятой обязан стоять объект, совершающий это действие."
          },
          workedExample: {
            prompt: "A catalog of the astronomer's unpublished notebooks ___ recently discovered in the university basement.",
            analysis: {
              en: "The subject is singular 'catalog', not plural 'notebooks'. Therefore, the singular verb 'was' is required instead of 'were'.",
              ru: "Подлежащее — 'catalog' (ед. ч.), а не 'notebooks'. Поэтому требуется глагол единственного числа 'was'."
            }
          }
        }
      },
      {
        id: "u-trans",
        domain: "Expression of Ideas",
        skill: "Transitions & Rhetorical synthesis",
        title: { en: "Unit 3: Logical Transitions & Rhetorical Synthesis", ru: "Модуль 3: Логические переходы и риторический синтез" },
        objectives: {
          en: ["Classify relationships as cause-effect, contrast, continuation, or example", "Synthesize bulleted research notes to match a specific rhetorical goal"],
          ru: ["Определять связь между идеями: причина, контраст, продолжение, пример", "Синтезировать заметки строго под заданную цель вопроса"]
        },
        lesson: {
          summary: {
            en: "Cover the transition choices first and read the sentence before and after the blank. State the relationship in your own words: Does Sentence 2 agree with, contrast with, exemplify, or result from Sentence 1? For Rhetorical Synthesis questions, focus 100% on the goal stated in the prompt (e.g., 'emphasize a difference') rather than grammar—all choices are grammatically correct.",
            ru: "Сначала прочитайте предложения до и после пропуска, не глядя на варианты. Определите логику: следствие, противопоставление или пример? В заданиях на риторический синтез все ответы грамматически верны — выбирайте тот, который точно выполняет задание в вопросе (например, 'подчеркнуть различие')."
          },
          workedExample: {
            prompt: "Early solar cells converted less than 6% of sunlight into electricity; ___, modern multi-junction cells can exceed 40% efficiency in laboratory settings.",
            analysis: {
              en: "6% vs. 40% is a sharp contrast across time. 'By contrast' or 'however' fits; 'consequently' or 'similarly' does not.",
              ru: "Между 6% в прошлом и 40% сейчас — явный контраст. Подходит 'by contrast' или 'however'."
            }
          }
        }
      },
      {
        id: "u-craft",
        domain: "Craft and Structure",
        skill: "Words in context & Text structure",
        title: { en: "Unit 4: Words in Context, Purpose & Cross-Text", ru: "Модуль 4: Слова в контексте и структура текста" },
        objectives: {
          en: ["Use context clues and contrast signals to predict precise vocabulary", "Identify the structural function of a sentence within a paragraph"],
          ru: ["Использовать контекстные маркеры для выбора точного слова", "Определять структурную роль предложения в абзаце"]
        },
        lesson: {
          summary: {
            en: "Every Words-in-Context question contains built-in evidence restated elsewhere in the passage. Look for colons, semicolons, or trigger words like 'although', 'unlike', and 'because'. Never pick a word just because it sounds sophisticated—verify that its exact meaning mirrors the text's clue.",
            ru: "В каждом задании Words in Context внутри самого текста спрятана подсказка-синоним или антоним. Обращайте внимание на двоеточия и союзы ('although', 'unlike')."
          },
          workedExample: {
            prompt: "Far from being ___ record of events, the chronicler's diary openly praised his patrons and omitted their defeats.",
            analysis: {
              en: "Praising patrons and hiding defeats means the diary was biased. 'Far from being' negates that, so the blank needs a word meaning 'neutral' or 'impartial' (an impartial record).",
              ru: "Поскольку дневник хвалил покровителей и скрывал поражения, он был предвзятым. Оборот 'Far from being' требует антонима — 'an impartial' (беспристрастный)."
            }
          }
        }
      },
      {
        id: "u-info",
        domain: "Information and Ideas",
        skill: "Main idea, Evidence & Inferences",
        title: { en: "Unit 5: Central Ideas, Evidence & Logical Inferences", ru: "Модуль 5: Главная мысль, доказательства и выводы" },
        objectives: {
          en: ["Distinguish the overarching main claim from narrow details", "Select empirical or textual findings that directly support a hypothesis", "Prefer cautious, text-bound inferences over extreme claims"],
          ru: ["Отличать главную мысль всего текста от второстепенных деталей", "Подбирать прямые доказательства для гипотезы", "Отдавать предпочтение осторожным выводам без крайностей"]
        },
        lesson: {
          summary: {
            en: "Wrong answers on SAT Reading usually fall into three traps: (1) Too Extreme ('always', 'never', 'completely'), (2) Too Narrow (mentions one example but misses the main point), or (3) Out of Scope (introduces a plausible real-world comparison not mentioned in the text).",
            ru: "Неверные ответы в Чтении обычно попадают в 3 ловушки: (1) Слишком категорично ('never', 'only'), (2) Слишком узко (одна деталь вместо сути) или (3) Выход за рамки текста (домыслы, которых нет в отрывке)."
          },
          workedExample: {
            prompt: "Plot A (visited often by bees) produced more seeds than Plot B (visited rarely). Conclusion?",
            analysis: {
              en: "'Bee visits may increase seed production' is supported. 'Seeds cannot form without bees' is too extreme because Plot B still produced some seeds.",
              ru: "Вывод 'посещения пчёл могут повышать урожайность семян' осторожен и точен. Утверждение 'без пчёл семена не образуются' слишком категорично."
            }
          }
        }
      }
    ]
  },
  {
    id: "math-sat",
    title: { en: "SAT Math Foundations & Practice", ru: "SAT Математика: Основы и Практика" },
    subtitle: { en: "Algebra, Advanced Math, Data Analysis, and Geometry/Trigonometry", ru: "Алгебра, продвинутая математика, анализ данных и геометрия" },
    section: "MATH",
    units: [
      {
        id: "u-alg",
        domain: "Algebra",
        skill: "Linear equations & Systems",
        title: { en: "Unit 1: Linear Equations, Functions & Systems", ru: "Модуль 1: Линейные уравнения, функции и системы" },
        objectives: {
          en: ["Interpret slope and y-intercept in real-world linear models", "Solve systems of linear equations and identify conditions for no/infinite solutions"],
          ru: ["Интерпретировать угловой коэффициент (slope) и свободный член в задачах", "Решать системы линейных уравнений и находить условия отсутствия решений"]
        },
        lesson: {
          summary: {
            en: "In a linear model y = mx + b, the slope 'm' represents the rate of change per 1 unit increase in x, and 'b' represents the initial value when x = 0. Two linear equations a1x + b1y = c1 and a2x + b2y = c2 have NO solution when their slopes are equal (a1/b1 = a2/b2) but their y-intercepts differ (c1/b1 != c2/b2).",
            ru: "В линейной модели y = mx + b коэффициент m показывает скорость изменения на каждую единицу x, а b — начальное значение при x = 0. Система двух линейных уравнений не имеет решений, если прямые параллельны (отношения коэффициентов при x и y равны, а свободные члены не пропорциональны)."
          },
          workedExample: {
            prompt: "If 3x + 6y = 18 and kx + 2y = 10 have no solution, what is the value of k?",
            analysis: {
              en: "Divide the first equation by 3 to match the y-coefficient: x + 2y = 6. For parallel lines (no solution), the x-coefficients must match: k = 1.",
              ru: "Разделим первое уравнение на 3, чтобы уравнять коэффициент при y: x + 2y = 6. Чтобы прямые были параллельны, коэффициенты при x должны совпадать: k = 1."
            }
          }
        }
      },
      {
        id: "u-adv",
        domain: "Advanced Math",
        skill: "Quadratics & Exponential functions",
        title: { en: "Unit 2: Quadratics, Polynomials & Exponentials", ru: "Модуль 2: Квадратичные и показательные функции" },
        objectives: {
          en: ["Use vertex form, factored form, and the discriminant b^2 - 4ac", "Distinguish linear growth (constant addition) from exponential growth (constant multiplier)"],
          ru: ["Использовать вершину параболы и дискриминант D = b^2 - 4ac", "Отличать линейный рост от показательного (экспоненциального)"]
        },
        lesson: {
          summary: {
            en: "For a quadratic f(x) = ax^2 + bx + c: the x-coordinate of the vertex is -b/(2a), the sum of roots is -b/a, and the product of roots is c/a. The discriminant D = b^2 - 4ac determines the number of real solutions (>0: two, =0: one, <0: zero). In exponential models f(t) = a(1 + r)^t, 'a' is the initial amount and 'r' is the growth/decay rate.",
            ru: "Для квадратичной функции f(x) = ax^2 + bx + c: абсцисса вершины равна -b/(2a), сумма корней -b/a, произведение c/a. Дискриминант D = b^2 - 4ac определяет число действительных корней. В показательной функции f(t) = a(1 + r)^t число a — начальное значение, а r — темп прироста."
          },
          workedExample: {
            prompt: "A bacteria culture starts with 500 cells and doubles every 3 hours. How many cells are present after 9 hours?",
            analysis: {
              en: "In 9 hours there are 9 / 3 = 3 doubling periods. N = 500 * 2^3 = 500 * 8 = 4000.",
              ru: "За 9 часов пройдёт 9 / 3 = 3 цикла удвоения. N = 500 * 2^3 = 500 * 8 = 4000."
            }
          }
        }
      },
      {
        id: "u-data",
        domain: "Problem-Solving and Data Analysis",
        skill: "Ratios, Percentages & Statistics",
        title: { en: "Unit 3: Ratios, Percentages, Probability & Data", ru: "Модуль 3: Проценты, пропорции, статистика и вероятность" },
        objectives: {
          en: ["Calculate compound percentage changes using decimal multipliers", "Compare mean and median when outliers are added or removed"],
          ru: ["Вычислять последовательные изменения в процентах через множители", "Сравнивать среднее арифметическое (mean) и медиану (median) при выбросах"]
        },
        lesson: {
          summary: {
            en: "Increasing a value by 20% then decreasing by 20% does NOT return to the original value: 1.20 * 0.80 = 0.96 (a net 4% decrease). In statistics, the median (middle value when sorted) is resistant to extreme outliers, whereas the mean (sum / count) is pulled strongly toward outliers.",
            ru: "Увеличение цены на 20%, а затем снижение на 20% НЕ возвращает исходную цену: 1.20 * 0.80 = 0.96 (итоговое снижение на 4%). В статистике медиана устойчива к резким выбросам (outliers), а среднее арифметическое сильно смещается в сторону выброса."
          },
          workedExample: {
            prompt: "A dataset of 7 salaries has a median of $52,000. If the highest salary is increased from $90,000 to $250,000, what happens to the median?",
            analysis: {
              en: "The 4th value in sorted order remains unchanged, so the median stays $52,000 while the mean increases.",
              ru: "Центральный (4-й по порядку) элемент не изменился, поэтому медиана остаётся равной $52,000, тогда как среднее вырастет."
            }
          }
        }
      },
      {
        id: "u-geom",
        domain: "Geometry and Trigonometry",
        skill: "Triangles, Circles & Area/Volume",
        title: { en: "Unit 4: Geometry, Right Triangles & Circles", ru: "Модуль 4: Геометрия, треугольники и уравнение окружности" },
        objectives: {
          en: ["Apply Pythagorean theorem, similar triangles, and complementary trig ratios", "Read center (h, k) and radius r from the circle equation (x - h)^2 + (y - k)^2 = r^2"],
          ru: ["Применять теорему Пифагора, подобие и тригонометрию прямоугольного треугольника", "Находить центр (h, k) и радиус r из уравнения окружности (x - h)^2 + (y - k)^2 = r^2"]
        },
        lesson: {
          summary: {
            en: "In any right triangle, if angles A and B are acute complementary angles (A + B = 90°), then sin(A) = cos(B). The standard equation of a circle in the xy-plane is (x - h)^2 + (y - k)^2 = r^2, with center (h, k) and radius r.",
            ru: "В прямоугольном треугольнике для острых углов A + B = 90° всегда выполняется равенство sin(A) = cos(B). Уравнение окружности имеет вид (x - h)^2 + (y - k)^2 = r^2, где (h, k) — координаты центра, а r — радиус."
          },
          workedExample: {
            prompt: "In the xy-plane, a circle has equation (x + 3)^2 + (y - 5)^2 = 49. What is its radius?",
            analysis: {
              en: "Since r^2 = 49 and radius is positive, r = 7 (and the center is (-3, 5)).",
              ru: "Так как r^2 = 49, радиус равен корню из 49, то есть r = 7 (а центр находится в точке (-3, 5))."
            }
          }
        }
      }
    ]
  }
];


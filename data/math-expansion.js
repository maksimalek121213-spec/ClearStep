/* Three additional SAT Math units, with fully worked examples and guided questions. */
(function () {
  var course = COURSES.find(function (c) { return c.id === "math-sat"; });
  if (!course) return;
  var modules = [
    {
      id: "m49", domain: "Algebra", skill: "Number properties, fractions, and exponents",
      title: { en: "Module 49: Number Properties, Fractions, and Exponents", ru: "Модуль 49: Свойства чисел, дроби и степени" },
      objectives: { en: ["Operate accurately with signed numbers and fractions", "Apply exponent rules and order of operations", "Convert between common fractions, decimals, and percents"], ru: ["Выполнять действия с числами со знаками и дробями", "Применять правила степеней и порядок действий", "Преобразовывать распространённые дроби, десятичные числа и проценты"] },
      summary: { en: "Work with signed numbers, fractions, and powers by applying one rule at a time. Addition and subtraction depend on signs; fraction operations require common denominators for addition and multiplication of numerators and denominators for products. A negative base in parentheses is raised with its sign, while an unparenthesized negative sign is not part of the exponent. Use order of operations and simplify only after the expression is correctly formed.", ru: "Работайте с числами со знаками, дробями и степенями, применяя правила по очереди. Для сложения дробей нужны общие знаменатели, а при умножении перемножаются числители и знаменатели. Отрицательное основание в скобках возводится в степень вместе со знаком; знак перед степенью без скобок не входит в основание. Соблюдайте порядок действий." },
      rules: [
        [{ en: "Signed numbers", ru: "Числа со знаками" }, { en: "Adding a positive number moves right on a number line; adding a negative moves left. Subtracting a number is adding its opposite.", ru: "Прибавление положительного числа сдвигает вправо, отрицательного — влево. Вычитание числа равносильно прибавлению противоположного." }],
        [{ en: "Fraction operations", ru: "Действия с дробями" }, { en: "For addition, use a common denominator. For multiplication, multiply across; for division, multiply by the reciprocal of the divisor.", ru: "Для сложения приведите дроби к общему знаменателю. При умножении перемножьте числители и знаменатели; при делении умножьте на обратную дробь." }],
        [{ en: "Powers and order", ru: "Степени и порядок действий" }, { en: "Evaluate parentheses, exponents, multiplication/division, then addition/subtraction. (−a)^n and −a^n can have different values.", ru: "Сначала скобки, затем степени, умножение/деление и сложение/вычитание. Значения (−a)^n и −a^n могут различаться." }]
      ],
      examples: [
        { p: "Evaluate 3/4 + 1/6.", s: { en: "The least common denominator is 12. Rewrite 3/4 as 9/12 and 1/6 as 2/12; then add: 11/12.", ru: "Общий знаменатель — 12. Получаем 9/12 + 2/12 = 11/12." } },
        { p: "Evaluate −2² and (−2)².", s: { en: "In −2², the exponent applies before the outside negative sign: −(2²)=−4. In (−2)², the entire negative base is squared, giving 4.", ru: "В −2² сначала вычисляется степень: −(2²)=−4. В (−2)² в квадрат возводится всё отрицательное основание, поэтому ответ 4." } },
        { p: "Simplify (3/5) ÷ (9/10).", s: { en: "Multiply by the reciprocal: (3/5)(10/9)=30/45. Divide numerator and denominator by 15 to get 2/3.", ru: "Умножаем на обратную дробь: (3/5)(10/9)=30/45=2/3." } }
      ],
      mistakes: [
        { en: "Adding fraction numerators and denominators directly; first make the denominators match.", ru: "Складывать числители и знаменатели напрямую; сначала приведите знаменатели." },
        { en: "Ignoring parentheses around a negative base; check exactly what is being raised to a power.", ru: "Игнорировать скобки у отрицательного основания; проверьте, что именно возводится в степень." },
        { en: "Rounding before the final step; keep exact fractions until the result is requested.", ru: "Округлять до последнего шага; сохраняйте точные дроби до получения ответа." }
      ],
      recap: { en: "Track signs, use a common denominator for addition, multiply by reciprocals when dividing fractions, and follow order of operations.", ru: "Следите за знаками, используйте общий знаменатель при сложении, умножайте на обратную дробь при делении и соблюдайте порядок действий." }
    },
    {
      id: "m50", domain: "Advanced Math", skill: "Function notation, composition, and transformations",
      title: { en: "Module 50: Function Notation, Composition, and Transformations", ru: "Модуль 50: Запись функций, композиция и преобразования" },
      objectives: { en: ["Evaluate a function at a given input", "Evaluate compositions in the correct order", "Identify vertical and horizontal graph transformations"], ru: ["Вычислять значение функции для заданного аргумента", "Вычислять композиции функций в правильном порядке", "Определять вертикальные и горизонтальные преобразования графика"] },
      summary: { en: "A function assigns one output to each allowed input. In f(x), x is the input; evaluate by substituting the entire input wherever x appears and then simplifying. Composition f(g(x)) means evaluate g first and feed that output into f. Transformations change a graph's position or orientation: f(x)+k shifts vertically, f(x−h) shifts right h units, and −f(x) reflects across the x-axis. Check parentheses carefully when substituting expressions.", ru: "Функция ставит каждому допустимому входу в соответствие один выход. В f(x) переменная x — вход: подставьте значение вместо x и упростите. Композиция f(g(x)) означает сначала вычислить g, а результат подставить в f. Преобразования меняют положение или направление графика: f(x)+k сдвигает вверх, f(x−h) — вправо на h, а −f(x) отражает относительно оси x." },
      rules: [
        [{ en: "Evaluate an input", ru: "Вычисляйте значение функции" }, { en: "Replace every x with the input in parentheses, preserve grouping, and simplify using order of operations.", ru: "Замените каждое x входным значением в скобках, сохраните группировку и упростите по порядку действий." }],
        [{ en: "Compose functions", ru: "Составляйте функции" }, { en: "For f(g(x)), find g(x) first; then use that complete expression as the input to f.", ru: "Для f(g(x)) сначала найдите g(x), затем подставьте всё полученное выражение в f." }],
        [{ en: "Read transformations", ru: "Читайте преобразования" }, { en: "Outside changes affect y; inside changes affect x and often move in the opposite direction. A negative outside reflects over the x-axis.", ru: "Изменения снаружи влияют на y, внутри — на x и часто сдвигают график в противоположном направлении. Минус снаружи отражает график относительно оси x." }]
      ],
      examples: [
        { p: "If f(x)=2x−3, find f(4).", s: { en: "Substitute 4 for x: f(4)=2(4)−3=8−3=5.", ru: "Подставляем 4 вместо x: f(4)=2·4−3=5." } },
        { p: "If f(x)=x+2 and g(x)=3x, find f(g(4)).", s: { en: "First g(4)=3·4=12. Then f(12)=12+2=14. The order matters.", ru: "Сначала g(4)=3·4=12. Затем f(12)=12+2=14. Порядок важен." } },
        { p: "Describe y=(x−3)²+2 compared with y=x².", s: { en: "The x−3 inside shifts the parabola 3 units right. The +2 outside shifts it 2 units up. Its vertex is (3,2).", ru: "Выражение x−3 сдвигает параболу на 3 вправо, а +2 — на 2 вверх. Вершина: (3,2)." } }
      ],
      mistakes: [
        { en: "Computing f(g(x)) in reverse order; the inner function is evaluated first.", ru: "Вычислять f(g(x)) в обратном порядке; сначала выполняется внутренняя функция." },
        { en: "Substituting into only one occurrence of x; replace every x in the rule.", ru: "Подставлять только в одно вхождение x; замените все x в формуле." },
        { en: "Reading x−h as a shift left; horizontal shifts reverse the sign inside the function.", ru: "Считать x−h сдвигом влево; горизонтальное направление противоположно знаку внутри скобок." }
      ],
      recap: { en: "Substitute the full input, evaluate compositions from the inside out, and distinguish horizontal from vertical transformations.", ru: "Подставляйте вход целиком, вычисляйте композицию изнутри наружу и различайте горизонтальные и вертикальные преобразования." }
    },
    {
      id: "m51", domain: "Advanced Math", skill: "Rational and radical equations",
      title: { en: "Module 51: Rational and Radical Equations", ru: "Модуль 51: Рациональные уравнения и уравнения с корнями" },
      objectives: { en: ["Identify values excluded by denominators and radicals", "Solve rational and radical equations", "Check candidates in the original equation and reject extraneous solutions"], ru: ["Находить значения, запрещённые знаменателем и подкоренным выражением", "Решать рациональные уравнения и уравнения с корнями", "Проверять кандидаты в исходном уравнении и отбрасывать посторонние корни"] },
      summary: { en: "Solve rational equations by identifying values that make a denominator zero, then clearing denominators with the least common denominator. Solve radical equations by isolating the radical and raising both sides to the required power. These operations can introduce invalid candidates, so substitute every candidate into the original equation and check domain restrictions. Keep restrictions visible throughout the work.", ru: "В рациональном уравнении найдите значения, обнуляющие знаменатель, затем избавьтесь от знаменателей с помощью общего знаменателя. В уравнении с корнем изолируйте корень и возведите обе части в нужную степень. Эти преобразования могут добавить посторонние корни, поэтому подставьте каждый ответ в исходное уравнение и проверьте ограничения области определения." },
      rules: [
        [{ en: "Protect the domain", ru: "Учитывайте область определения" }, { en: "A denominator cannot equal zero. For an even root, the radicand must be nonnegative for real solutions.", ru: "Знаменатель не может быть равен нулю. Подкоренное выражение чётного корня должно быть неотрицательным." }],
        [{ en: "Clear denominators", ru: "Избавляйтесь от знаменателей" }, { en: "Multiply every term by the least common denominator, then solve the resulting equation and reject restricted values.", ru: "Умножьте каждый член на наименьший общий знаменатель, решите полученное уравнение и исключите недопустимые значения." }],
        [{ en: "Check radical solutions", ru: "Проверяйте корни" }, { en: "After isolating and squaring a radical equation, substitute each candidate into the original equation. Squaring is not reversible by itself.", ru: "После изоляции корня и возведения в квадрат подставьте каждый кандидат в исходное уравнение. Само возведение в квадрат не является обратимым преобразованием." }]
      ],
      examples: [
        { p: "Solve (x−1)/(x+2)=2.", s: { en: "First note x≠−2. Multiply by x+2: x−1=2x+4. Subtract x and 4: −5=x, so x=−5, which is allowed.", ru: "Сначала x≠−2. Умножаем на x+2: x−1=2x+4, откуда x=−5. Это допустимо." } },
        { p: "Solve √(x+1)=4.", s: { en: "Square both sides: x+1=16. Thus x=15. Check: √16=4, so the solution works.", ru: "Возводим обе части в квадрат: x+1=16, значит x=15. Проверка: √16=4." } },
        { p: "Solve √(x+1)=x−1.", s: { en: "Because the left side is nonnegative, require x≥1. Squaring gives x+1=(x−1)², so x²−3x=0 and x=0 or 3. Only x=3 meets x≥1; checking confirms √4=2=3−1.", ru: "Левая часть неотрицательна, значит x≥1. После возведения в квадрат: x+1=(x−1)², откуда x=0 или 3. Условию подходит только 3; проверка даёт 2=2." } }
      ],
      mistakes: [
        { en: "Multiplying by a denominator without recording where it is zero; those inputs remain forbidden.", ru: "Умножать на знаменатель, не записав его нули; такие значения остаются запрещёнными." },
        { en: "Accepting every root after squaring; check it in the original equation.", ru: "Принимать любой корень после возведения в квадрат; проверьте его в исходном уравнении." },
        { en: "Losing a solution by dividing by an expression that could be zero; factor and analyze both cases first.", ru: "Терять решение при делении на выражение, которое может быть нулём; сначала разложите и рассмотрите оба случая." }
      ],
      recap: { en: "Record forbidden inputs first, solve with reversible steps when possible, and verify every candidate in the original equation.", ru: "Сначала запишите запрещённые значения, по возможности используйте обратимые шаги и проверьте каждый ответ в исходном уравнении." }
    }
  ];

  modules.forEach(function (m) {
    if (!course.units.some(function (u) { return u.id === m.id; })) {
      course.units.push({ id: m.id, domain: m.domain, skill: m.skill, title: m.title, objectives: m.objectives,
        lesson: { summary: m.summary, rules: m.rules.map(function (r) { return { t: r[0], d: r[1] }; }), examples: m.examples, mistakes: m.mistakes, recap: m.recap } });
    }
  });

  var banks = {
    m49: [
      ["Evaluate −7+12.",["−19","−5","5","19"],2,"Starting at −7 and moving 12 units right gives 5.","A positive addend moves right on the number line.","Signed numbers","Easy"],
      ["What is 3/4+1/6?",["5/10","11/12","4/10","7/12"],1,"Use denominator 12: 3/4=9/12 and 1/6=2/12. Their sum is 11/12.","Rewrite both fractions with denominator 12.","Fraction addition","Easy"],
      ["What is 5/6−1/4?",["4/2","7/12","1/2","2/10"],1,"Use denominator 12: 10/12−3/12=7/12.","Find a common denominator before subtracting.","Fraction subtraction","Easy"],
      ["Simplify (2/3)(9/10).",["3/5","18/13","11/13","6/5"],0,"Multiply: 18/30. Reduce numerator and denominator by 6 to get 3/5.","Multiply across, then reduce the fraction.","Fraction multiplication","Easy"],
      ["Simplify (3/5)÷(9/10).",["2/3","27/50","3/2","1/6"],0,"Multiply by the reciprocal: (3/5)(10/9)=30/45=2/3.","Keep the first fraction and flip the second.","Fraction division","Medium"],
      ["Evaluate 2³·2².",["2⁵=32","4⁵=1024","2⁶=64","2=2"],0,"For equal bases, add exponents: 2^(3+2)=2⁵=32.","When multiplying powers with the same base, add exponents.","Exponent laws","Medium"],
      ["Evaluate (−2)⁴.",["−16","−8","8","16"],3,"An even power makes four negative factors: (−2)(−2)(−2)(−2)=16.","The negative is inside parentheses and the exponent is even.","Signed exponents","Medium"],
      ["Evaluate 3²+4·2.",["26","17","14","20"],1,"Do the exponent and multiplication first: 9+8=17.","Apply order of operations before adding.","Order of operations","Easy"],
      ["Which fraction equals 0.375?",["3/8","3/5","5/8","37/100"],0,"0.375=375/1000. Divide numerator and denominator by 125 to get 3/8.","Write the decimal as 375 thousandths and reduce.","Decimal and fraction conversion","Medium"],
      ["What is 15% of 80?",["8","10","12","15"],2,"Convert 15% to 0.15 and multiply: 0.15×80=12.","A percent of a quantity is the decimal rate times the quantity.","Percent arithmetic","Easy"],
      ["Evaluate (−3)²−2³.",["1","−1","17","−17"],0,"Evaluate powers first: (−3)²=9 and 2³=8. Then 9−8=1.","Do both powers before subtracting; the negative is inside the first base.","Order of operations","Medium"],
      ["What is 2/5 of 35?",["7","12","14","17.5"],2,"Multiply: (2/5)×35=2×7=14.","A fraction of a quantity means multiply by that fraction.","Fraction applications","Easy"],
      ["Which is greatest?",["0.6","5/8","61%","3/5"],1,"Convert to decimals: 0.6, 0.625, 0.61, and 0.6. The greatest is 5/8=0.625.","Convert every choice to the same form before comparing.","Compare rational numbers","Medium"],
      ["Simplify 10⁵/10².",["10³","10⁷","100³","10"],0,"For powers with the same nonzero base divided, subtract exponents: 10^(5−2)=10³.","When dividing like bases, subtract the exponents.","Exponent laws","Medium"],
      ["A $60 item is discounted by 25%. What is the sale price?",["$15","$35","$45","$75"],2,"The discount is 0.25×60=$15. Subtract it from $60 to get $45.","Find the discount amount, then subtract it from the original price.","Percent applications","Easy"]
    ],
    m50: [
      ["If f(x)=2x−3, what is f(4)?",["5","8","11","−5"],0,"Substitute x=4: 2(4)−3=8−3=5.","Replace every x with 4, keeping the multiplication grouped.","Evaluate a function","Easy"],
      ["If g(x)=x²+1, what is g(−2)?",["−3","3","5","−1"],2,"Substitute the full input: (−2)²+1=4+1=5.","The input is negative, so keep it in parentheses before squaring.","Evaluate a function","Easy"],
      ["If f(x)=x+2 and g(x)=3x, what is f(g(4))?",["14","18","6","12"],0,"First g(4)=12. Then f(12)=12+2=14.","Evaluate the inside function g before applying f.","Function composition","Medium"],
      ["If f(x)=2x and g(x)=x−5, what is g(f(3))?",["1","6","−2","−4"],0,"First f(3)=6. Then g(6)=6−5=1.","The function nearest the input is evaluated first.","Function composition","Medium"],
      ["If h(x)=x²−4, what is h(0)?",["−4","0","4","−2"],0,"Substitute zero: 0²−4=−4.","At x=0, the squared term is zero.","Evaluate a function","Easy"],
      ["What is f(x+1) if f(x)=3x−2?",["3x−1","3x+1","3x−2","x+1"],1,"Substitute x+1 for every x: 3(x+1)−2=3x+3−2=3x+1.","Put the entire input x+1 in parentheses first.","Function expressions","Medium"],
      ["Compared with y=x², the graph y=(x−3)² is shifted…",["3 units right","3 units left","3 units up","3 units down"],0,"Replacing x with x−3 shifts a graph 3 units right.","A horizontal shift inside the function has the opposite sign.","Graph transformations","Medium"],
      ["Compared with y=x², the graph y=x²+4 is shifted…",["4 units up","4 units down","4 units right","4 units left"],0,"Adding 4 outside the squared expression raises every output by 4.","An outside addition changes the y-values.","Graph transformations","Easy"],
      ["If f(x)=x² and g(x)=x+1, what is f(g(2))?",["9","5","8","4"],0,"First g(2)=3. Then f(3)=3²=9.","Compute the inner function, then square its result.","Function composition","Medium"],
      ["The graph y=−f(x) is the graph of y=f(x) reflected across…",["the x-axis","the y-axis","the line y=x","the origin only"],0,"Multiplying every output by −1 changes y to its opposite, reflecting across the x-axis.","The negative is outside the function and changes outputs.","Graph transformations","Medium"],
      ["If f(x)=4x+1, what is f(a−2)?",["4a−7","4a−1","4a+3","a−7"],0,"Substitute the entire input: 4(a−2)+1=4a−8+1=4a−7.","Put the expression a−2 in parentheses wherever x appears.","Function expressions","Medium"],
      ["If f(x)=x+6, what is f⁻¹(10)?",["4","10","16","−4"],0,"Find the input that produces 10: x+6=10, so x=4. Thus f⁻¹(10)=4.","An inverse function asks which input gives the stated output.","Inverse functions","Medium"],
      ["Compared with y=f(x), the graph y=f(x)+3 is shifted…",["3 units up","3 units down","3 units right","3 units left"],0,"Adding 3 outside the function increases each output by 3, shifting the graph upward.","An addition outside the function changes y-values.","Graph transformations","Easy"],
      ["If g(x)=2x−1 and h(x)=x², what is h(g(2))?",["9","15","49","16"],0,"First g(2)=3. Then h(3)=3²=9.","Evaluate the inner function before applying the outer function.","Function composition","Medium"],
      ["If f(x)=x², which is f(−x)?",["x²","−x²","x","−x"],0,"Substitute −x: f(−x)=(−x)²=x².","Keep the entire input in parentheses before squaring.","Function symmetry","Medium"]
    ],
    m51: [
      ["Solve (x−1)/(x+2)=2.",["−5","5","−2","1"],0,"Require x≠−2. Multiply by x+2: x−1=2x+4, so x=−5, which is allowed.","Record the forbidden denominator value before multiplying.","Rational equations","Medium"],
      ["Solve √(x+1)=4.",["15","17","3","−15"],0,"Square both sides: x+1=16, so x=15. Check: √16=4.","Isolate the radical, then square both sides and check.","Radical equations","Easy"],
      ["Solve 1/(x−1)=1/4.",["5","−3","4","1"],0,"The restriction is x≠1. Cross-multiply: 4=x−1, so x=5.","Cross-multiply, then verify the answer is not the forbidden value.","Rational equations","Easy"],
      ["Solve √(2x−1)=3.",["5","4","8","−4"],0,"Square both sides: 2x−1=9, so 2x=10 and x=5. The check gives √9=3.","Square both sides, then solve the resulting linear equation.","Radical equations","Easy"],
      ["Solve x²=49.",["7 only","−7 only","−7 or 7","49 or −49"],2,"Both 7² and (−7)² equal 49, so x=−7 or x=7.","A positive square has two real square roots.","Square-root solutions","Easy"],
      ["Solve 2/(x+1)=1/3.",["5","−5","6","−7"],0,"Require x≠−1. Cross-multiply: 6=x+1, so x=5.","Cross-multiply and remember x cannot be −1.","Rational equations","Medium"],
      ["Solve √(x+4)+1=4.",["5","9","12","−3"],0,"Subtract 1: √(x+4)=3. Square: x+4=9, so x=5. Check: √9+1=4.","Isolate the radical before squaring.","Radical equations","Medium"],
      ["Solve (x+3)/2=5.",["7","10","13","2"],0,"Multiply both sides by 2: x+3=10. Subtract 3 to get x=7.","Undo the division by multiplying both sides by 2.","Rational equations","Easy"],
      ["Which value is excluded from 3/(x−4)=2?",["4","2","3","−4"],0,"The denominator x−4 is zero at x=4, so x=4 is outside the domain.","Set the denominator equal to zero to find the restriction.","Domain restrictions","Easy"],
      ["Solve √(x+1)=x−1.",["3","0","0 and 3","No solution"],0,"Require x≥1. Squaring gives x+1=(x−1)², so x=0 or 3. Only 3 meets x≥1; checking confirms it.","Before squaring, the right side must be nonnegative; check candidates in the original equation.","Extraneous solutions","Hard"],
      ["Solve 2/(x−3)=1.",["5","1","−1","3"],0,"The restriction is x≠3. Multiply by x−3: 2=x−3, so x=5, which is allowed.","Record the denominator restriction, then multiply both sides by the denominator.","Rational equations","Medium"],
      ["Solve √(x−2)=4.",["18","14","6","−14"],0,"Square both sides: x−2=16, so x=18. Check: √(18−2)=4.","Square both sides, solve, and substitute into the original radical equation.","Radical equations","Easy"],
      ["Solve (x+1)/x=2, where x≠0.",["1","−1","2","0"],0,"Multiply by x: x+1=2x. Therefore x=1, which satisfies the restriction.","Multiply both sides by x and keep the original restriction x≠0.","Rational equations","Medium"],
      ["Which candidate is extraneous for √(x+2)=x?",["−1","2","Both","Neither"],0,"Squaring gives x+2=x², so x=−1 or 2. Check x=−1: √1=1 but the right side is −1, so it fails. x=2 works.","Check each candidate in the unsquared equation, paying attention to signs.","Extraneous solutions","Hard"],
      ["For what x is 5/(x²−9) undefined?",["x=−3 or x=3","x=0","x=9 only","No real x"],0,"The denominator is zero when x²−9=0, so (x−3)(x+3)=0 and x=±3.","Set the denominator equal to zero and solve the resulting equation.","Domain restrictions","Medium"]
    ]
  };

  var nextId = 5000;
  Object.keys(banks).forEach(function (unitId) {
    var qs = banks[unitId];
    qs.forEach(function (q, i) {
      var choices = q[1], correct = q[2], explanation = q[3], hint = q[4], skill = q[5], difficulty = q[6];
      QUESTION_BANK.push({ id: nextId++, section: "MATH", unitId: unitId, domain: course.units.find(function (u) { return u.id === unitId; }).domain,
        skill: skill, difficulty: difficulty, type: "mc", q: q[0], o: choices, c: correct, e: explanation,
        t: hint, h: hint });
    });
  });
})();

/* Deeper lessons and additional original practice for the four legacy SAT Math modules. */
(function () {
  var course = COURSES.find(function (c) { return c.id === "math-sat"; });
  if (!course) return;
  var add = function (id, data) {
    var u = course.units.find(function (x) { return x.id === id; });
    if (u) Object.assign(u.lesson, data);
  };
  add("u-alg", {
    rules: [
      { t: { en: "Isolate the variable", ru: "Выделите переменную" }, d: { en: "Use inverse operations on both sides. Keep the equation balanced, and undo addition or subtraction before multiplication or division.", ru: "Выполняйте обратные действия с обеих сторон. Сохраняйте равенство: сначала отменяйте сложение или вычитание, затем умножение или деление." } },
      { t: { en: "Inequalities and negative factors", ru: "Неравенства и отрицательные множители" }, d: { en: "Solve an inequality like an equation, but reverse <, >, ≤, or ≥ whenever you multiply or divide by a negative number.", ru: "Решайте неравенство как уравнение, но меняйте направление знака при умножении или делении на отрицательное число." } },
      { t: { en: "Systems of two lines", ru: "Система двух линейных уравнений" }, d: { en: "A solution is an ordered pair satisfying both equations. Equal slopes with different intercepts mean no solution; the same line written twice means infinitely many solutions.", ru: "Решение — пара чисел, удовлетворяющая обоим уравнениям. Одинаковые наклоны и разные пересечения с осью дают отсутствие решений; одна и та же прямая — бесконечно много решений." } }
    ],
    examples: [
      { p: "Solve 4(2x − 3) = 20.", s: { en: "Divide both sides by 4: 2x − 3 = 5. Add 3: 2x = 8. Divide by 2: x = 4. Check: 4(8 − 3) = 20.", ru: "Разделим обе части на 4: 2x − 3 = 5. Прибавим 3: 2x = 8. Разделим на 2: x = 4. Проверка: 4(8 − 3) = 20." } },
      { p: "Solve −3x + 5 ≥ 17.", s: { en: "Subtract 5: −3x ≥ 12. Divide by −3 and reverse the sign: x ≤ −4.", ru: "Вычтем 5: −3x ≥ 12. Разделим на −3 и изменим знак: x ≤ −4." } },
      { p: "How many solutions does y = 2x + 1 and 4x − 2y = −2 have?", s: { en: "Divide the second equation by 2: 2x − y = −1, or y = 2x + 1. Both equations describe the same line, so there are infinitely many solutions.", ru: "Разделим второе уравнение на 2: 2x − y = −1, то есть y = 2x + 1. Это одна и та же прямая, поэтому решений бесконечно много." } }
    ],
    mistakes: [
      { en: "Changing only one side of an equation; every operation must preserve equality.", ru: "Менять только одну часть уравнения; действие нужно выполнить с обеих сторон." },
      { en: "Forgetting to reverse the inequality after division by a negative number.", ru: "Забывать изменить знак неравенства после деления на отрицательное число." },
      { en: "Calling two parallel lines the same line; compare intercepts as well as slopes.", ru: "Считать параллельные прямые одной прямой; сравнивайте и наклоны, и пересечения с осью." }
    ],
    recap: { en: "Use inverse operations to isolate a variable, reverse inequalities only when multiplying or dividing by a negative, and interpret a system by checking whether its lines intersect, coincide, or are parallel.", ru: "Выделяйте переменную обратными действиями, меняйте знак неравенства при умножении или делении на отрицательное число и определяйте, пересекаются ли прямые системы, совпадают или параллельны." }
  });
  add("u-data", {
    rules: [
      { t: { en: "Ratios and unit rates", ru: "Отношения и единичные ставки" }, d: { en: "Keep units attached to quantities. A unit rate compares an amount with one unit of another quantity; scale both parts of an equivalent ratio by the same factor.", ru: "Не теряйте единицы измерения. Единичная ставка сравнивает величины на одну единицу; обе части равного отношения умножаются на один коэффициент." } },
      { t: { en: "Percent change", ru: "Процентное изменение" }, d: { en: "Convert p% to p/100. Increase by p% with multiplier 1 + p/100; decrease by p% with multiplier 1 − p/100. Sequential changes use the new value as the next base.", ru: "Переведите p% в p/100. Увеличение на p% означает множитель 1 + p/100, уменьшение — 1 − p/100. При последовательных изменениях база каждый раз меняется." } },
      { t: { en: "Mean and median", ru: "Среднее и медиана" }, d: { en: "Mean = sum ÷ count. Sort values to find the median. Extreme values can strongly affect the mean but often have little effect on the median.", ru: "Среднее = сумма ÷ количество. Для медианы расположите значения по порядку. Крайние значения заметно меняют среднее, но часто почти не влияют на медиану." } },
      { t: { en: "Probability", ru: "Вероятность" }, d: { en: "For equally likely outcomes, probability = favorable outcomes ÷ all outcomes. Probabilities range from 0 to 1; complementary events have probabilities that sum to 1.", ru: "Для равновероятных исходов вероятность = подходящие исходы ÷ все исходы. Вероятность лежит от 0 до 1, а вероятности противоположных событий в сумме равны 1." } }
    ],
    examples: [
      { p: "A car travels 156 miles on 6 gallons. What is its unit rate in miles per gallon?", s: { en: "Divide distance by fuel: 156 ÷ 6 = 26. The unit rate is 26 miles per gallon.", ru: "Разделим расстояние на расход топлива: 156 ÷ 6 = 26. Единичная ставка — 26 миль на галлон." } },
      { p: "A $80 item is discounted by 25%, then taxed 10%. Find the final price.", s: { en: "After the discount: 80 × 0.75 = $60. Apply tax to $60: 60 × 1.10 = $66. The changes are sequential, so use the discounted price as the tax base.", ru: "После скидки: 80 × 0,75 = 60 $. Добавим налог: 60 × 1,10 = 66 $. Изменения последовательны, поэтому налог применяется к цене после скидки." } },
      { p: "Find the median of 3, 5, 8, 12, 22.", s: { en: "The values are already ordered. The middle (third) value is 8, so the median is 8.", ru: "Значения уже упорядочены. Среднее по позиции, третье значение, равно 8; это медиана." } },
      { p: "A bag has 4 red and 6 blue tokens. What is the probability of not drawing red?", s: { en: "There are 6 non-red tokens out of 10 total, so P(not red) = 6/10 = 3/5.", ru: "Из 10 жетонов 6 не красные, поэтому P(не красный) = 6/10 = 3/5." } }
    ],
    mistakes: [
      { en: "Adding successive percentages instead of applying each multiplier to the current value.", ru: "Складывать проценты последовательных изменений вместо применения множителей к текущей цене." },
      { en: "Dropping units in a rate problem; write the requested units beside the answer.", ru: "Терять единицы в задаче на скорость или ставку; указывайте единицы рядом с ответом." },
      { en: "Finding the median before sorting the data.", ru: "Находить медиану до сортировки значений." }
    ],
    recap: { en: "Track units, use multipliers for percent changes, sort before finding a median, and define the sample space before calculating probability.", ru: "Следите за единицами, применяйте множители к процентам, сортируйте данные перед поиском медианы и определяйте все возможные исходы для вероятности." }
  });
  add("u-adv", {
    rules: [
      { t: { en: "Factoring and roots", ru: "Разложение на множители и корни" }, d: { en: "If a quadratic factors as a(x − r₁)(x − r₂), its roots are r₁ and r₂. Set each factor equal to zero; check by expanding or substituting.", ru: "Если квадратный трёхчлен разложен как a(x − r₁)(x − r₂), его корни — r₁ и r₂. Приравняйте каждый множитель к нулю и проверьте подстановкой или раскрытием скобок." } },
      { t: { en: "Vertex and discriminant", ru: "Вершина и дискриминант" }, d: { en: "For ax² + bx + c, the vertex x-coordinate is −b/(2a). The discriminant b² − 4ac tells the number of real roots: positive means two, zero means one, negative means none.", ru: "Для ax² + bx + c абсцисса вершины равна −b/(2a). Дискриминант b² − 4ac определяет число действительных корней: положительный — два, ноль — один, отрицательный — ни одного." } },
      { t: { en: "Exponential growth", ru: "Показательный рост" }, d: { en: "A model A = A₀(1 + r)^t multiplies by the same factor each time period. Convert a percent rate to a decimal before using it.", ru: "В модели A = A₀(1 + r)^t значение умножается на один коэффициент каждый период. Перед вычислением переведите процентную ставку в десятичную дробь." } }
    ],
    examples: [
      { p: "Solve x² − 7x + 12 = 0 by factoring.", s: { en: "Find two numbers with product 12 and sum 7: 3 and 4. Then (x − 3)(x − 4) = 0, so x = 3 or x = 4.", ru: "Найдём числа с произведением 12 и суммой 7: это 3 и 4. Тогда (x − 3)(x − 4) = 0, значит x = 3 или x = 4." } },
      { p: "How many real roots does 2x² + 4x + 5 = 0 have?", s: { en: "D = 4² − 4(2)(5) = 16 − 40 = −24. Since D < 0, there are no real roots.", ru: "D = 4² − 4·2·5 = 16 − 40 = −24. Так как D < 0, действительных корней нет." } },
      { p: "A $200 balance grows 5% per year for 2 years. What is the balance?", s: { en: "Use multiplier 1.05 each year: 200(1.05)² = 200(1.1025) = $220.50.", ru: "Используем множитель 1,05 каждый год: 200·(1,05)² = 200·1,1025 = 220,50 $." } }
    ],
    mistakes: [
      { en: "Forgetting that factoring gives two possible roots, one from each factor.", ru: "Забывать, что разложение на множители даёт два возможных корня — по одному из каждого множителя." },
      { en: "Using b/(2a) instead of −b/(2a) for the vertex x-coordinate.", ru: "Использовать b/(2a) вместо −b/(2a) для координаты вершины." },
      { en: "Treating 5% as 5 instead of 0.05 in an exponential model.", ru: "Подставлять 5 вместо 0,05 для ставки 5% в показательную модель." }
    ],
    recap: { en: "Factor to identify roots, use the discriminant to count real solutions, and model repeated percent change with an exponential multiplier.", ru: "Разлагайте трёхчлен для поиска корней, используйте дискриминант для их подсчёта и моделируйте повторные процентные изменения через степень множителя." }
  });
  add("u-geom", {
    rules: [
      { t: { en: "Right triangles", ru: "Прямоугольные треугольники" }, d: { en: "For legs a and b and hypotenuse c, a² + b² = c². The hypotenuse is opposite the right angle and is the longest side.", ru: "Для катетов a и b и гипотенузы c: a² + b² = c². Гипотенуза лежит напротив прямого угла и является самой длинной стороной." } },
      { t: { en: "Similarity and scale", ru: "Подобие и масштаб" }, d: { en: "Similar figures have equal corresponding angles and proportional corresponding sides. Find one scale factor, then multiply or divide corresponding lengths by it.", ru: "У подобных фигур равны соответствующие углы и пропорциональны соответствующие стороны. Найдите коэффициент подобия и умножайте или делите соответствующие длины на него." } },
      { t: { en: "Circle equation", ru: "Уравнение окружности" }, d: { en: "In (x − h)² + (y − k)² = r², the center is (h, k) and radius is r. Read signs inside parentheses carefully: (x + 2)² means h = −2.", ru: "В уравнении (x − h)² + (y − k)² = r² центр равен (h, k), радиус — r. Следите за знаками в скобках: (x + 2)² означает h = −2." } },
      { t: { en: "Trigonometric ratios", ru: "Тригонометрические отношения" }, d: { en: "Relative to angle θ: sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, and tan θ = opposite/adjacent.", ru: "Относительно угла θ: sin θ = противолежащий катет/гипотенуза, cos θ = прилежащий катет/гипотенуза, tan θ = противолежащий/прилежащий катет." } }
    ],
    examples: [
      { p: "A right triangle has legs 9 and 12. Find its hypotenuse.", s: { en: "c² = 9² + 12² = 81 + 144 = 225, so c = 15. Use the positive root because a length is positive.", ru: "c² = 9² + 12² = 81 + 144 = 225, поэтому c = 15. Берём положительный корень, так как длина положительна." } },
      { p: "A 6-foot person casts a 4-foot shadow. A tree casts a 10-foot shadow. How tall is the tree if the sun angle is the same?", s: { en: "The triangles are similar, so height/shadow is constant: 6/4 = h/10. Thus h = 10(6/4) = 15 feet.", ru: "Треугольники подобны, поэтому отношение высоты к тени одинаково: 6/4 = h/10. Значит h = 10·6/4 = 15 футов." } },
      { p: "Find the center and radius of (x − 4)² + (y + 1)² = 25.", s: { en: "Compare with (x − h)² + (y − k)² = r²: h = 4, k = −1, and r = √25 = 5. Center: (4, −1); radius: 5.", ru: "Сравним с (x − h)² + (y − k)² = r²: h = 4, k = −1, r = √25 = 5. Центр (4, −1), радиус 5." } },
      { p: "In a right triangle, the side opposite θ is 5 and the hypotenuse is 13. Find sin θ.", s: { en: "Sine = opposite/hypotenuse, so sin θ = 5/13. Do not use the adjacent side for sine.", ru: "Синус = противолежащий катет/гипотенуза, поэтому sin θ = 5/13. Для синуса не используйте прилежащий катет." } }
    ],
    mistakes: [
      { en: "Using the hypotenuse as a leg in the Pythagorean theorem; identify the right angle first.", ru: "Использовать гипотенузу как катет; сначала найдите прямой угол." },
      { en: "Adding the same amount instead of applying a scale factor to similar figures.", ru: "Прибавлять одинаковое число вместо умножения на коэффициент подобия." },
      { en: "Reading the sign of a circle's center directly from the parentheses without reversing it.", ru: "Считывать знак координаты центра прямо из скобок, не меняя знак на противоположный." }
    ],
    recap: { en: "Identify the right triangle's hypotenuse, scale similar figures multiplicatively, use the circle's standard form to read its center and radius, and choose the trig ratio from the sides involved.", ru: "Находите гипотенузу, масштабируйте подобные фигуры умножением, считывайте центр и радиус из стандартной формы окружности и выбирайте тригонометрическое отношение по нужным сторонам." }
  });

  var banks = {
    "u-alg": [
      ["Solve 5x − 7 = 18.",["5","4","3","−5"],0,"Add 7 to both sides: 5x = 25. Divide by 5: x = 5. Substitution gives 25 − 7 = 18.","Undo subtraction first, then divide by the coefficient of x.","One-variable equations","Easy"],
      ["Solve 3(x + 2) = 2x + 11.",["5","17","−5","1"],0,"Distribute: 3x + 6 = 2x + 11. Subtract 2x, then subtract 6: x = 5.","Distribute before collecting variable terms.","One-variable equations","Easy"],
      ["Solve 7 − 2x < 15.",["x > −4","x < −4","x > 4","x < 4"],0,"Subtract 7: −2x < 8. Divide by −2 and reverse the inequality: x > −4.","The inequality sign reverses when you divide by a negative.","Linear inequalities","Medium"],
      ["Which value of k makes 2x + 3 = kx + 3 have infinitely many solutions?",["2","3","0","−2"],0,"For infinitely many solutions the equations must be identical. The constants already match, so k must equal 2.","For infinitely many solutions, both sides must describe the same equation.","Systems and solution count","Medium"],
      ["A plan charges $12 plus $4 per visit. Which expression gives the cost for v visits?",["12 + 4v","4 + 12v","16v","12v − 4"],0,"The fixed charge is 12 and each of v visits adds 4, so total cost is 12 + 4v.","Separate the fixed starting fee from the per-visit rate.","Linear models","Easy"],
      ["Solve 4x + 9 = 2x − 5.",["−7","7","−2","−14"],0,"Subtract 2x: 2x + 9 = −5. Subtract 9: 2x = −14, so x = −7.","Gather x-terms on one side and constants on the other.","One-variable equations","Medium"],
      ["For what x does 3x + 1 ≥ 10?",["x ≥ 3","x ≤ 3","x ≥ 9","x ≤ 9"],0,"Subtract 1 to get 3x ≥ 9. Divide by positive 3, so the sign stays the same: x ≥ 3.","Only reverse the sign when multiplying or dividing by a negative.","Linear inequalities","Easy"],
      ["How many solutions do y = −x + 4 and 2x + 2y = 8 have?",["Infinitely many","Exactly one","None","Exactly two"],0,"Divide the second equation by 2: x + y = 4, or y = −x + 4. The lines coincide, so there are infinitely many solutions.","Rewrite both equations in the same form and compare them.","Systems and solution count","Hard"]
    ],
    "u-data": [
      ["A recipe uses 3 cups of flour for 8 servings. How many cups are needed for 20 servings?",["7.5","6","8","12"],0,"The scale factor is 20/8 = 2.5. Multiply 3 by 2.5 to get 7.5 cups.","Scale the servings and ingredient amount by the same factor.","Proportional relationships","Easy"],
      ["A price of $50 increases by 12%. What is the new price?",["$56","$62","$44","$60"],0,"12% of 50 is 0.12 × 50 = 6. Add the increase: 50 + 6 = $56.","An increase uses a multiplier of 1.12.","Percent change","Easy"],
      ["A quantity decreases from 80 to 68. What is the percent decrease?",["15%","12%","17.6%","85%"],0,"The decrease is 12. Divide by the original 80: 12/80 = 0.15 = 15%.","Divide the change by the original amount, not the final amount.","Percent change","Medium"],
      ["Find the mean of 4, 7, 9, and 20.",["10","9","8","40"],0,"Add the values: 4 + 7 + 9 + 20 = 40. Divide by 4 values: mean = 10.","Mean is the sum divided by the number of observations.","Statistics","Easy"],
      ["A data set is 2, 3, 5, 7, 100. Which measure is less affected by 100?",["Median","Mean","Range","Sum"],0,"The median is 5 and is determined by the middle position. The outlier 100 strongly pulls the mean upward.","An extreme value changes the mean more than the middle position.","Statistics","Medium"],
      ["A fair die is rolled. What is the probability of a number greater than 4?",["1/3","1/2","2/3","1/6"],0,"Favorable outcomes are 5 and 6, two outcomes out of six. 2/6 simplifies to 1/3.","List the outcomes that satisfy the condition, then divide by six.","Probability","Easy"],
      ["A value of 120 is reduced by 10%, then increased by 10%. What is the final value?",["118.8","120","121.2","108"],0,"Apply both multipliers: 120 × 0.90 × 1.10 = 118.8. Equal percent decrease and increase do not cancel because the bases differ.","Apply each percentage to the current value, in order.","Percent change","Hard"],
      ["The ratio of red to blue tiles is 5:3. If there are 40 red tiles, how many blue tiles are there?",["24","15","30","8"],0,"Five ratio parts equal 40, so one part is 8. Blue has three parts: 3 × 8 = 24.","Find the value of one ratio part before scaling the other quantity.","Ratios","Medium"]
    ],
    "u-adv": [
      ["Factor x² − 9.",["(x − 3)(x + 3)","(x − 9)(x + 1)","(x − 3)²","(x + 9)(x − 1)"],0,"This is a difference of squares: a² − b² = (a − b)(a + b). Thus x² − 9 = (x − 3)(x + 3).","Recognize 9 as 3² and use the difference-of-squares pattern.","Polynomial factoring","Easy"],
      ["Solve x² + 2x − 8 = 0.",["x = 2 or x = −4","x = −2 or x = 4","x = 2 only","x = −4 only"],0,"Factor: (x + 4)(x − 2) = 0. Therefore x = −4 or x = 2.","Find factors of −8 that add to 2, then set each factor to zero.","Quadratic equations","Medium"],
      ["What is the x-coordinate of the vertex of y = 3x² − 12x + 7?",["2","−2","4","−4"],0,"For ax² + bx + c, x = −b/(2a). Here −(−12)/(2·3) = 12/6 = 2.","Use −b/(2a), keeping the negative sign in the formula.","Quadratic functions","Medium"],
      ["How many real solutions does x² + 6x + 9 = 0 have?",["One","Two","None","Infinitely many"],0,"The discriminant is 6² − 4(1)(9) = 36 − 36 = 0, so there is one real repeated root.","A zero discriminant means one repeated real root.","Discriminant","Medium"],
      ["A population of 300 grows by 4% each year. Which expression models the population after t years?",["300(1.04)^t","300 + 4t","304^t","300(0.04)^t"],0,"Exponential growth uses initial amount × (1 + rate)^time. The rate is 0.04, giving 300(1.04)^t.","Convert 4% to 0.04 and add it to 1 for the growth multiplier.","Exponential functions","Easy"],
      ["If the roots of x² − 5x + 6 = 0 are r and s, what is r + s?",["5","6","−5","1"],0,"For ax² + bx + c, the sum of roots is −b/a. Here it is −(−5)/1 = 5. Factoring gives roots 2 and 3, confirming the sum.","Use the sum-of-roots relationship or factor to check.","Quadratic relationships","Hard"],
      ["A substance halves every 2 hours from 160 grams. How much remains after 6 hours?",["20 g","40 g","10 g","80 g"],0,"Six hours is three half-life periods. The amount is 160(1/2)^3 = 20 grams.","Count the number of periods first, then apply the repeated multiplier.","Exponential decay","Medium"],
      ["For which value of k does x² + kx + 16 = 0 have exactly one real solution?",["8","4","0","−4"],0,"Exactly one real root requires discriminant zero: k² − 4(1)(16) = 0, so k² = 64 and k = ±8. Since choices include only 8, that is one valid listed value.","Set the discriminant equal to zero; check both signs against the answer choices.","Discriminant","Hard"]
    ],
    "u-geom": [
      ["A right triangle has legs 5 and 12. What is the hypotenuse?",["13","17","7","12"],0,"By the Pythagorean theorem, c² = 5² + 12² = 25 + 144 = 169, so c = 13.","The hypotenuse is opposite the right angle; use a² + b² = c².","Right triangles","Easy"],
      ["Two similar triangles have corresponding sides 4 and 10. A second side in the smaller triangle is 6. What is its corresponding larger side?",["15","12","16","2.4"],0,"The scale factor is 10/4 = 2.5. Multiply the corresponding smaller side by 2.5: 6 × 2.5 = 15.","Find the scale factor from the known corresponding sides.","Similarity","Medium"],
      ["A circle has center (−2, 3) and radius 4. Which equation represents it?",["(x + 2)² + (y − 3)² = 16","(x − 2)² + (y + 3)² = 4","(x + 2)² + (y − 3)² = 4","(x − 2)² + (y + 3)² = 16"],0,"Use (x − h)² + (y − k)² = r². With h = −2, k = 3, r² = 16, the equation is (x + 2)² + (y − 3)² = 16.","The signs inside parentheses are opposite the center coordinates; square the radius.","Circle equations","Medium"],
      ["In a right triangle, the opposite side to θ is 8 and the hypotenuse is 17. What is sin θ?",["8/17","15/17","8/15","17/8"],0,"Sine is opposite over hypotenuse, so sin θ = 8/17.","Use SOH: sine = opposite over hypotenuse.","Trigonometric ratios","Easy"],
      ["A circle has radius 6. What is its circumference?",["12π","36π","6π","24π"],0,"Circumference is 2πr = 2π(6) = 12π.","Use circumference 2πr, not area πr².","Circle measurements","Easy"],
      ["A right triangle has hypotenuse 10 and one leg 6. What is the other leg?",["8","4","√136","16"],0,"Let the missing leg be b. b² + 6² = 10², so b² = 64 and b = 8.","Subtract the known leg's square from the hypotenuse's square.","Right triangles","Medium"],
      ["A circle's equation is (x − 1)² + (y + 4)² = 9. What is its center?",["(1, −4)","(−1, 4)","(1, 4)","(−1, −4)"],0,"Compare with (x − h)² + (y − k)² = r². Here h = 1 and k = −4, so the center is (1, −4).","Reverse the sign inside each coordinate bracket.","Circle equations","Medium"],
      ["In a 30°-60°-90° triangle, the shorter leg is 7. What is the hypotenuse?",["14","7√3","14√3","7"],0,"In a 30°-60°-90° triangle, the hypotenuse is twice the shorter leg: 2 × 7 = 14.","Use the special right-triangle side ratio 1 : √3 : 2.","Special right triangles","Hard"]
    ]
  };
  var nextId = 6000;
  Object.keys(banks).forEach(function (unitId) {
    banks[unitId].forEach(function (q) {
      var unit = course.units.find(function (u) { return u.id === unitId; });
      QUESTION_BANK.push({ id: nextId++, section: "MATH", unitId: unitId, domain: unit.domain, skill: q[5], difficulty: q[6], type: "mc", q: q[0], o: q[1], c: q[2], e: q[3], t: q[4], h: q[4], reviewed: true });
    });
  });
})();

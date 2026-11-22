/* Additional original SAT Math practice across the remaining eleven units. */
(function () {
  var course = COURSES.find(function (c) { return c.id === "math-sat"; });
  if (!course) return;
  var banks = {
    "m15": [
      ["A line passes through (2, 5) and (6, 13). What is its slope?",["2","1/2","4","8"],0,"Slope is change in y divided by change in x: (13−5)/(6−2)=8/4=2.","Use (y₂−y₁)/(x₂−x₁).","Slope","Easy"],
      ["In y = −3x + 8, what is the y-intercept?",["8","−3","−8","3"],0,"In slope-intercept form y=mx+b, the y-intercept is b. Here b=8.","Match the equation to y=mx+b.","Linear equations","Easy"],
      ["What is the slope of a line parallel to y = 4x − 7?",["4","−4","1/4","−7"],0,"Parallel nonvertical lines have equal slopes, so the slope is 4.","Parallel lines share the same rate of change.","Linear relationships","Medium"],
      ["A line has slope 3 and passes through (1, 2). Which equation represents it?",["y = 3x − 1","y = 3x + 2","y = x + 3","y = −3x + 5"],0,"Use y−2=3(x−1). Simplifying gives y=3x−1.","Use point-slope form with the given point and slope.","Linear equations","Medium"],
      ["A tank contains 40 liters and drains at 5 liters per minute. Which expression gives the amount after t minutes?",["40 − 5t","5t + 40","40t − 5","5 − 40t"],0,"The initial amount is 40, and it decreases by 5 each minute: 40−5t.","Represent a starting amount and a constant decrease.","Linear models","Easy"]
    ],
    "m16": [
      ["Find the mean of 6, 8, 10, and 16.",["10","8","16","40"],0,"The sum is 40; divide by four values to get a mean of 10.","Add all values and divide by their count.","Statistics","Easy"],
      ["For 2, 4, 7, 9, 13, what is the median?",["7","4","9","35"],0,"The values are ordered and the middle, third value is 7.","Sort the values and select the middle one.","Statistics","Easy"],
      ["A data set has Q1=12 and Q3=27. What is its interquartile range?",["15","39","2.25","12"],0,"The interquartile range is the third quartile minus the first: Q3−Q1=27−12=15.","Subtract the first quartile from the third quartile.","Data distributions","Medium"],
      ["A table shows 18 of 60 students chose art. What percent is that?",["30%","18%","42%","33%"],0,"Divide the number who chose art by the total: 18/60=0.30. Convert the decimal to a percent: 30%.","Divide the part by the whole and convert to percent.","Tables and percentages","Easy"],
      ["Which statistic is most affected by replacing one value of 10 with 100?",["Mean","Median","Mode","Minimum"],0,"The mean uses every value in the sum, so the large replacement raises it. The median depends on position.","Ask which statistic directly uses every numerical value.","Data interpretation","Medium"]
    ],
    "m29": [
      ["Solve the system y=2x+1 and y=x+4.",["(3, 7)","(1, 3)","(7, 3)","No solution"],0,"Set expressions equal: 2x+1=x+4, so x=3. Then y=7.","At the intersection, the two expressions for y are equal.","Systems of equations","Easy"],
      ["How many solutions does y=−2x+5 and 2y=−4x+10 have?",["Infinitely many","One","None","Two"],0,"Dividing the second equation by 2 gives y=−2x+5, identical to the first line.","Simplify both equations before comparing them.","Systems of equations","Medium"],
      ["Solve 3x+y=11 and x−y=1.",["(3, 2)","(2, 3)","(4, −1)","(1, 8)"],0,"Add equations to eliminate y: 4x=12, so x=3. Substitute into x−y=1 to get y=2.","Add the equations to cancel y, then substitute back.","Elimination","Medium"],
      ["Which point satisfies x>2 and y≤4?",["(3, 4)","(2, 4)","(5, 5)","(1, 3)"],0,"(3,4) has x greater than 2 and y equal to 4, which meets y≤4.","Check both inequalities; strict > excludes equality.","Systems of inequalities","Easy"],
      ["Two services cost 8+2m and 14+m dollars. For what m are costs equal?",["6","−6","22","3"],0,"Set equal: 8+2m=14+m. Subtract m and 8 to get m=6.","At the break-even point, set the two expressions equal.","Linear models","Medium"]
    ],
    "m31": [
      ["A quantity doubles every 5 hours. What multiplier models 15 hours of growth?",["8","3","15","5"],0,"Fifteen hours contains three doubling periods; the multiplier is 2³=8.","Count periods, then raise the per-period multiplier to that count.","Exponential growth","Medium"],
      ["Which function has initial value 7 and grows by 6% per step?",["7(1.06)^t","7(0.06)^t","7+6t","6(1.07)^t"],0,"Exponential growth is initial value times (1+rate)^t: 7(1.06)^t.","Convert 6% to 0.06 and add it to 1.","Exponential models","Easy"],
      ["A $500 value depreciates by 20% each year. What is its value after 2 years?",["$320","$300","$400","$480"],0,"Use a 0.80 multiplier twice: 500(0.80)²=$320.","A 20% decrease leaves 80% of the current value each year.","Exponential decay","Medium"],
      ["For f(x)=3·2ˣ, what is f(4)?",["48","24","32","11"],0,"Substitute 4 for x. Evaluate the exponent first: 3·2⁴=3·16=48.","Evaluate the exponent before multiplying by 3.","Function evaluation","Easy"],
      ["A culture grows from 200 to 250 in one hour. What is the hourly growth rate?",["25%","20%","50%","1.25%"],0,"The increase is 50. Relative to the initial 200, 50/200=0.25=25%.","Divide the increase by the starting amount.","Exponential growth","Medium"]
    ],
    "m45": [
      ["Solve −2 < 3x+1 ≤ 10.",["−1 < x ≤ 3","−1 ≤ x < 3","−3 < x ≤ 9","x ≤ 3"],0,"Subtract 1 throughout: −3<3x≤9. Divide by positive 3: −1<x≤3.","Apply each operation to all three parts of the compound inequality.","Compound inequalities","Medium"],
      ["If 2x+3y=12 and x=3, what is y?",["2","3","4","6"],0,"Substitute x=3: 6+3y=12, so 3y=6 and y=2.","Substitute the known variable value into the equation.","Systems of equations","Easy"],
      ["Which expression is equivalent to 4(2x−3)+x?",["9x−12","8x−3","9x−3","8x−12"],0,"Distribute 4 to get 8x−12, then combine x terms: 9x−12.","Distribute before combining like terms.","Equivalent expressions","Easy"],
      ["Solve |x−5|=3.",["x=2 or x=8","x=−2 or x=8","x=2 only","x=8 only"],0,"The distance from x to 5 is 3, so x=5−3=2 or x=5+3=8.","Absolute value gives two cases: inside equals 3 or −3.","Absolute value equations","Medium"],
      ["For which x is 2x−7 positive?",["x>3.5","x<3.5","x>−3.5","x<−3.5"],0,"Solve 2x−7>0: add 7 and divide by 2, giving x>3.5.","Translate positive to greater than zero and solve.","Inequalities","Easy"]
    ],
    "m46": [
      ["If x²=49 and x is positive, what is x?",["7","−7","±7","49"],0,"The solutions to x²=49 are ±7; the condition x>0 selects 7.","Use the stated sign condition to choose between square roots.","Quadratic equations","Easy"],
      ["Simplify (x³)(x⁴).",["x⁷","x¹²","2x⁷","x"],0,"When multiplying powers with the same base, add exponents: 3+4=7.","Same base multiplication means add exponents.","Exponent rules","Easy"],
      ["Which expression equals (x²−9)/(x−3), for x≠3?",["x+3","x−3","x²+3","1"],0,"Factor the numerator: (x−3)(x+3). Cancel x−3, valid because x≠3; result x+3.","Factor the difference of squares, then apply the stated restriction.","Equivalent expressions","Medium"],
      ["Solve √(2x+1)=5.",["12","−12","8","24"],0,"Square both sides: 2x+1=25, so 2x=24 and x=12. Check: √25=5.","Square both sides, solve, then check in the original equation.","Radical equations","Medium"],
      ["For f(x)=x²−4, what are the zeros?",["−2 and 2","−4 and 4","0 and 4","2 only"],0,"Set x²−4=0. Then (x−2)(x+2)=0, so x=−2 or x=2.","Set the function equal to zero and factor the difference of squares.","Quadratic functions","Easy"]
    ],
    "m47": [
      ["A student selects 1 of 5 shirts and 1 of 3 pairs of pants. How many outfits are possible?",["15","8","5","3"],0,"For each of 5 shirts there are 3 choices of pants: 5×3=15 outfits.","Multiply the independent choices.","Counting and probability","Easy"],
      ["In a sample of 80 voters, 52 support a proposal. What percent support it?",["65%","52%","28%","60%"],0,"Divide supporters by the sample total: 52/80=0.65. Multiply by 100 to express it as a percent: 65%.","Compute part divided by total.","Data analysis","Easy"],
      ["A 30% discount is applied to $90. What is the sale price?",["$63","$27","$60","$117"],0,"A 30% discount leaves 70%: 90×0.70=$63.","Find the remaining percent, then multiply by the original price.","Percentages","Easy"],
      ["If events A and B are independent, P(A)=0.4 and P(B)=0.5. What is P(A and B)?",["0.2","0.9","0.45","0.1"],0,"For independent events, multiply: 0.4×0.5=0.20.","Independent events use multiplication for 'and'.","Probability","Medium"],
      ["A data set's standard deviation decreases. What happened to its spread?",["Values are generally closer to the mean","The mean must increase","The sample size doubled","The median became zero"],0,"Standard deviation measures typical distance from the mean. A smaller value indicates less spread.","Interpret standard deviation as a measure of spread.","Statistics","Medium"]
    ],
    "m48": [
      ["A circle has radius 3. What is its area?",["9π","6π","3π","18π"],0,"Use A=πr². With r=3, A=π·3²=9π square units.","Area uses the square of the radius.","Circle area","Easy"],
      ["A cylinder has radius 2 and height 5. What is its volume?",["20π","10π","25π","40π"],0,"Volume is πr²h=π·4·5=20π cubic units.","Use the circular base area times height.","Volume","Medium"],
      ["An arc is 90° in a circle. What fraction of the circumference does it represent?",["1/4","1/2","1/3","3/4"],0,"90/360=1/4, so the arc is one-quarter of the circumference.","Divide the central angle by 360°.","Circle arcs","Medium"],
      ["In a right triangle, cos θ=12/13 and θ is acute. What is sin θ?",["5/13","12/5","13/12","1/13"],0,"The adjacent leg and hypotenuse are 12 and 13. The other leg is √(169−144)=5, so sine=5/13.","Use the Pythagorean theorem to find the missing leg.","Trigonometry","Hard"],
      ["A 10-foot ladder reaches 8 feet up a wall. How far is its base from the wall?",["6 feet","2 feet","√164 feet","18 feet"],0,"The ladder is the hypotenuse. The base distance is √(10²−8²)=√36=6 feet.","Treat the wall, ground, and ladder as a right triangle.","Mixed geometry","Easy"]
    ],
    "m49": [
      ["Evaluate −3 + 8.",["5","−11","11","−5"],0,"Starting at −3 and adding 8 gives 5.","Compare the magnitudes and keep the sign of the larger magnitude.","Signed numbers","Easy"],
      ["Simplify 2/3 + 1/4.",["11/12","3/7","3/12","1/2"],0,"Use denominator 12: 8/12+3/12=11/12.","Find a common denominator before adding numerators.","Fractions","Easy"],
      ["Evaluate 5⁰.",["1","0","5","−1"],0,"Any nonzero number raised to the zero power equals 1.","Recall the zero-exponent rule.","Exponents","Easy"],
      ["Simplify x⁵/x², where x≠0.",["x³","x⁷","x¹⁰","x²·⁵"],0,"When dividing powers with the same nonzero base, subtract exponents: x^(5−2)=x³.","Same-base division means subtract exponents.","Exponent rules","Medium"],
      ["What is 3/5 of 40?",["24","8","15","35"],0,"Rewrite 40 as 5×8: (3/5)×40=3×8=24.","Divide by the denominator, then multiply by the numerator.","Fractions and proportions","Easy"]
    ],
    "m50": [
      ["If f(x)=2x+1, what is f(4)?",["9","8","7","6"],0,"Replace x with 4 and evaluate: f(4)=2(4)+1=9.","Replace every x with the input value.","Function notation","Easy"],
      ["If f(x)=x² and g(x)=x+3, what is f(g(2))?",["25","7","13","10"],0,"Evaluate the inner function first: g(2)=5. Then f(g(2))=f(5)=5²=25.","In a composition, evaluate the inside function first.","Function composition","Medium"],
      ["The graph of y=f(x)+4 is shifted in which direction from y=f(x)?",["Up 4 units","Down 4 units","Right 4 units","Left 4 units"],0,"Adding 4 outside the function increases every output by 4, shifting the graph up.","Changes outside f affect y-values.","Transformations","Easy"],
      ["The graph of y=f(x−2) is shifted how?",["Right 2 units","Left 2 units","Up 2 units","Down 2 units"],0,"Replacing x with x−2 shifts the graph right 2 units.","Horizontal shifts have the opposite sign inside the input.","Transformations","Medium"],
      ["If f(x)=3x−2, solve f(x)=10.",["4","3","12","−4"],0,"Set 3x−2=10. Add 2 to get 3x=12, then divide by 3: x=4. Check: f(4)=10.","Set the output expression equal to 10 and solve.","Function equations","Easy"]
    ],
    "m51": [
      ["For what x is 1/(x−4) undefined?",["4","−4","0","1"],0,"A rational expression is undefined when its denominator is zero: x−4=0, so x=4.","Set the denominator equal to zero.","Domain restrictions","Easy"],
      ["Solve √(x−1)=3.",["10","8","2","−8"],0,"Square both sides: x−1=9, so x=10. Checking gives √9=3.","Isolate the radical, square, and check the original equation.","Radical equations","Easy"],
      ["Solve 6/(x+1)=2, where x≠−1.",["2","−2","3","−4"],0,"Multiply by x+1: 6=2(x+1), so 3=x+1 and x=2.","Keep the denominator restriction and multiply both sides.","Rational equations","Medium"],
      ["Which value must be excluded from the domain of √(2x−6)?",["x<3","x>3","x≤3","All real x"],0,"The radicand must be nonnegative: 2x−6≥0, so x≥3. Values below 3 are excluded.","Set the expression under the square root greater than or equal to zero.","Radical domains","Medium"],
      ["Solve (x−2)/(x+1)=0.",["2","−1","−2","1"],0,"A fraction equals zero when its numerator is zero and denominator is nonzero. x−2=0 gives x=2, and 2+1≠0.","Set the numerator to zero, then verify the denominator is not zero.","Rational equations","Medium"]
    ]
  };
  var id = 7000;
  Object.keys(banks).forEach(function (unitId) {
    var unit = course.units.find(function (u) { return u.id === unitId; });
    banks[unitId].forEach(function (q) {
      QUESTION_BANK.push({ id: id++, section: "MATH", unitId: unitId, domain: unit.domain, skill: q[5], difficulty: q[6], type: "mc", q: q[0], o: q[1], c: q[2], e: q[3], t: q[4], h: q[4], reviewed: true });
    });
  });
})();

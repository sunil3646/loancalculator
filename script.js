document.addEventListener("DOMContentLoaded", () => {
  const calculateBtn = document.getElementById("calculateBtn");
  const amountInput = document.getElementById("amount");
  const interestInput = document.getElementById("interest");
  const yearsInput = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly");
  const totalPayment = document.getElementById("total");
  const totalInterestPayment = document.getElementById("totalInterest");

  function calculateLoan() {
    const principal = parseFloat(amountInput.value);
    const rate = parseFloat(interestInput.value);
    const years = parseFloat(yearsInput.value);

    if (isNaN(principal) || isNaN(rate) || isNaN(years) || principal <= 0 || years <= 0) {
      alert("Please enter valid numbers");
      return;
    }

    // Simple interest calculation
    const totalInterest = (principal * rate * years) / 100;
    const total = principal + totalInterest;
    const monthly = total / (years * 12);

    animateValue(monthlyPayment, 0, monthly, 1000);
    animateValue(totalPayment, 0, total, 1000);
    animateValue(totalInterestPayment, 0, totalInterest, 1000);
  }
  function animateValue(element, start, end, duration) {
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const current = start + (end - start) * progress;
      element.textContent = current.toFixed(2);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  calculateBtn.addEventListener("click", calculateLoan);
});

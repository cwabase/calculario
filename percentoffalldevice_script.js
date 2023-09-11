
<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Your JavaScript code here
        function extractNumbers(str) {
            return str.match(/\d+/g).map(Number);
        }

        const titleText = document.querySelector('title').textContent;
        const numbers = extractNumbers(titleText);
        if (numbers.length === 2) {
            const discountPercentage = numbers[0];
            const originalPrice = numbers[1];
            document.getElementById('originalPrice').value = originalPrice || '';
            document.getElementById('discountPercentage').value = discountPercentage || '';
        }

        function updateDetails(originalPrice, discountPercentage, discount, finalPrice) {
            const detailsHeading = document.getElementById('detailsHeading');
            const detailsContent = document.getElementById('detailsContent');
            const discountType = titleText.includes("out of") ? "out of" : "off";
            detailsHeading.textContent = `How to Calculate ${discountPercentage}% ${discountType} ${originalPrice} - Your Step-by-Step Solution`;

            let content = `
           
       <div style="text-align: left;">
    <h3>Calculation formula</h3>
    To calculate percent off, you can use the following equations:<br>

    <ol style="background-color: yellowgreen; color: red;">
        <li>Amount Saved = Original Price x Discount % / 100</li>
        <li>Sale Price = Original Price - Amount Saved</li>
    </ol>

    <h3 style="font-size: 24px; font-weight: bold; line-height: 1.5;">Solution</h3>
    <h4 style="font-size: 20px; font-weight: bold; line-height: 1.5;" 1)>1) What is ${discountPercentage} percent (%) ${discountType} $${originalPrice}?</h4>
    Using formula one and replacing the given values:<br>

    <ul style="color: balck; font-weight: light;">
        <li>Amount Saved = $${originalPrice} x ${discountPercentage} / 100</li>
        <li>Amount Saved = $${discount.toFixed(2)} (answer)</li>
    </ul>
    <p style="color: brown;">In other words, a ${discountPercentage}% discount for an item with an original price of $${originalPrice} is equal to $${discount.toFixed(2)} (Amount Saved).</p>

    <h4 style="font-size: 20px; font-weight: bold; line-height: 1.5;" 1)>2) How much to pay for an item of $${originalPrice} when discounted ${discountPercentage} percent (%)?</h4>
    Using formula two and replacing the given values:<br>


    <ul style="color: balck; font-weight: light;">
        <li>Sale Price = $${originalPrice} - $${discount.toFixed(2)} </li>
        <li> Sale Price = $${finalPrice.toFixed(2)} (answer) </li>
        <li> This means, the cost of the item to you is $${finalPrice.toFixed(2)}.</li>
    </ul>
    <p style="color: brown;"> You will pay $${finalPrice.toFixed(2)} for an item with an original price of $${originalPrice} when discounted ${discountPercentage}%.</p>

To find more examples, just choose one at the bottom of this page.
</div>
            
          
`;

            detailsContent.innerHTML = content;
        }

        function calculateDiscount() {
            const originalPrice = parseFloat(document.getElementById('originalPrice').value);
            const discountPercentage = parseFloat(document.getElementById('discountPercentage').value);

            if (!isNaN(originalPrice) && !isNaN(discountPercentage)) {
                const discount = (originalPrice * discountPercentage) / 100;
                const finalPrice = originalPrice - discount;

                document.getElementById('discount').value = '$' + discount.toFixed(2);
                document.getElementById('finalPrice').value = '$' + finalPrice.toFixed(2);

                updateDetails(originalPrice, discountPercentage, discount, finalPrice);
            } else {
                
            }
        }

        const originalPriceInput = document.getElementById('originalPrice');
        const discountPercentageInput = document.getElementById('discountPercentage');

        originalPriceInput.addEventListener('input', calculateDiscount);
        discountPercentageInput.addEventListener('input', calculateDiscount);

        calculateDiscount();
    });


// Clear input fields upon clicking
document.addEventListener("DOMContentLoaded", function() {
    var numberInputs = document.querySelectorAll('input[type="number"]');
    numberInputs.forEach(function(input) {
        input.addEventListener("focus", function() {
            this.value = '';
        });
    });
});
</script>

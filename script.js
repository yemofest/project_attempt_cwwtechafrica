// JavaScript Code
        document.addEventListener("DOMContentLoaded", function() {
            const heightInput = document.getElementById('height');
            const weightInput = document.getElementById('weight');
            const calculateBtn = document.getElementById('calculate-btn');
            const resultDiv = document.getElementById('result');
            const historyTable = document.getElementById('history').getElementsByTagName('tbody')[0];

            // Event listener for the Calculate BMI button
            calculateBtn.addEventListener('click', function() {
                // Reset error styles
                heightInput.classList.remove('error');
                weightInput.classList.remove('error');

                const height = parseFloat(heightInput.value);
                const weight = parseFloat(weightInput.value);

                // Check for valid inputs
                if (isNaN(height) || height <= 0) {
                    heightInput.classList.add('error');
                    return;
                }

                if (isNaN(weight) || weight <= 0) {
                    weightInput.classList.add('error');
                    return;
                }

                const bmi = calculateBMI(height, weight);
                const bmiCategory = getBMICategory(bmi);
                const bmiStatus = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory}).`;

                // Update the result display
                resultDiv.textContent = bmiStatus;
                resultDiv.className = bmiCategory.toLowerCase();

                // Add BMI data to the history table
                addToHistory(new Date().toLocaleDateString(), height, weight, bmi.toFixed(2));
            });

            // Function to calculate BMI
            function calculateBMI(height, weight) {
                return weight / ((height / 100) ** 2);
            }

            // Function to get BMI category
            function getBMICategory(bmi) {
                if (bmi < 18.5) {
                    return 'Underweight';
                } else if (bmi < 25) {
                    return 'Normal weight';
                } else if (bmi < 30) {
                    return 'Overweight';
                } else {
                    return 'Obese';
                }
            }

            // Function to add BMI data to the history table
            function addToHistory(date, height, weight, bmi) {
                const newRow = historyTable.insertRow(0);
                newRow.innerHTML = `<td>${date}</td><td>${height}</td><td>${weight}</td><td>${bmi}</td>`;
            }
        });
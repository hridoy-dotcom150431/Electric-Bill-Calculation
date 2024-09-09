// Calculate total electricity consumption for a day and a month
function calculateTotal() {
    const watts = document.querySelectorAll('input[type="number"][placeholder="Enter watt"]');
    const hours = document.querySelectorAll('input[type="number"][placeholder="Enter hour"]');
    let dayTotal = 0;
    let monthTotal = 0;


    watts.forEach((watt, index) => {
        const hour = hours[index].value;
        // calculate the unit in kwh
        const consumption = watt.value * hour / 1000;
        dayTotal += consumption;
        monthTotal += consumption * 30; // Assuming a month has 30 days
    });


    // Electricity unit prices as of March 1
    const unitPrice = {
        regular: 4.53,
        wholesale: 6.70,
        agriculture: 4.19,
        smallScaleIndustries: 8.95,
        offPeakHours: 7.04,
        peakHours: 10.24,
        religiousAndEducationalInstitutions: 12,
        streetLights: 6.2,
        commercialFlatUnitBasis: 9.27,
        peakHourCommercialEstablishments: 12.34
    };


    // unit rate calculation
    let unit_price;
    let additional_charge = 42;
    // Additional charge per unit based on the provided information
    switch (monthTotal) {
        case monthTotal <= 50:
            unit_price = 4.63;
            break;
        case (monthTotal > 50 || monthTotal <= 75):
            unit_price = 5.26;
            break;
        case (monthTotal >= 76 || monthTotal <= 200):
            unit_price = 7.20;
            break;
        case (monthTotal >= 201 || monthTotal <= 300):
            unit_price = 7.59;
            break;
        case (monthTotal >= 301 || monthTotal <= 400):
            unit_price = 8.02;
            break;
        case (monthTotal >= 401 || monthTotal <= 600):
            unit_price = 12.67;
            break;
        default:
            unit_price = 14.61;
            break;
    }


    const resultDay = document.getElementById('result-day');
    const resultMonth = document.getElementById('result-month');
    const resultDayUnit = document.getElementById('result-day-unit');
    const resultMonthUnit = document.getElementById('result-month-unit');

    // Calculate the total cost for a day and a month
    // const totalCostDay = dayTotal * unitPrice.regular + additionalCharge;
    // const totalCostMonth = monthTotal * unitPrice.regular + additionalCharge * 30;
    const totalCostDay = dayTotal * unit_price;
    const totalCostMonth = monthTotal * unit_price + additional_charge;

    resultDayUnit.textContent = "Total unit in a day: " + dayTotal.toFixed(2);
    resultDay.textContent = "Total Bill for a day: Tk " + totalCostDay.toFixed(2);

    resultMonthUnit.textContent = "Total unit in a month: " + monthTotal.toFixed(2);
    resultMonth.textContent = "Total Bill for a month: Tk " + totalCostMonth.toFixed(2) + " (Additional Monthly Charge = Tk 42)";

}

// Add a new hero container
function addHero() {
    let total_hero = document.querySelectorAll('.hero');
    let next_hero = total_hero.length + 1;
    const hero_mother = document.querySelector('.hero_mother');
    const hero = document.createElement('div');
    hero.classList.add('hero');
    hero.id = 'hero_' + next_hero;
    hero.innerHTML = `
        <input type="number" class='input' required placeholder="Enter watt">
        <input type="number" class ='input' required placeholder="Enter hour">
        <button class="remove-btn" onclick="removeHero(`+next_hero+`)">Delete</button>
        `;
    // hero_mother.insertBefore(hero, hero_mother.lastElementChild);
    hero_mother.appendChild(hero);
}

// Remove the last hero container
function removeHero(id) {
    // console.log(id);
    
    const hero_mother = document.querySelector('.hero_mother');
    const heroes = hero_mother.querySelectorAll('.hero');
    if (hero_mother.hasChildNodes()) {
        // container.removeChild(container.lastElementChild.previousElementSibling);
        // hero_mother.removeChild(hero_mother.children[id - 1]);
        // hero_mother.removeChild(document.querySelector('#hero_' + id));
        document.getElementById('hero_' + id).remove();
    }
}

// Reset input fields
function resetFields() {
    const inputFields = document.querySelectorAll('.input');
    inputFields.forEach(input => {
        input.value = ''; // Reset each input field value to empty string
    });

    // Reset result displays
    document.getElementById('result-day').textContent = '';
    document.getElementById('result-month').textContent = '';
    document.getElementById('result-day-unit').textContent = '';
    document.getElementById('result-month-unit').textContent = '';

    // document.getElementById('final_result').innerHTML = '';
}

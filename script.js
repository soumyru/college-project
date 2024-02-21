document.getElementById('diseaseInfo').style.display = 'none';

document.getElementById('diseaseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let diseaseName = document.getElementById('diseaseName').value;
    let diseaseDetails = getDiseaseDetails(diseaseName);
    let diseaseInfoDiv = document.getElementById('diseaseInfo');
    if (diseaseDetails) {
        diseaseInfoDiv.innerHTML = diseaseDetails;
        diseaseInfoDiv.style.display = 'block';
        document.getElementById('diseaseName').value = '';
    } else {
        diseaseInfoDiv.style.display = 'none';
        alert('No information found on the disease.');
    }
});

function getDiseaseDetails(diseaseName) {
    if (diseaseName.toLowerCase() === 'retinal disease') {
        return "<h2>Retinal Disease</h2><p>Retinal diseases vary widely, but most of them cause visual symptoms. Retinal diseases can affect any part of your retina, a thin layer of tissue on the inside back wall of your eye. The retina contains millions of light-sensitive cells (rods and cones) and other nerve cells that receive and organize visual information. Your retina sends this information to your brain through your optic nerve, enabling you to see. Treatment is available for some retinal diseases. Depending on your condition, treatment goals may be to stop or slow the disease and preserve, improve or restore your vision. Untreated, some retinal diseases can cause severe vision loss or blindness.</p><p>Retinal diseases vary widely, but most of them cause visual symptoms. Retinal diseases can affect any part of your retina, a thin layer of tissue on the inside back wall of your eye.</p><p>The retina contains millions of light-sensitive cells (rods and cones) and other nerve cells that receive and organize visual information. Your retina sends this information to your brain through your optic nerve, enabling you to see.</p><p>Treatment is available for some retinal diseases. Depending on your condition, treatment goals may be to stop or slow the disease and preserve, improve or restore your vision. Untreated, some retinal diseases can cause severe vision loss or blindness.</p>";
    } else {
        return null;
    }
}


document.getElementById('diseaseInfo').addEventListener('click', function(event) {
    if (event.target.classList.contains('close-button')) {
        document.getElementById('diseaseInfo').style.display = 'none';
    }
});

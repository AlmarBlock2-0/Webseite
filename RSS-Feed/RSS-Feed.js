    //Changes "[Meldung anzigen]" to "Weiter Lesen."
    const Buttons = document.querySelectorAll('p a');
    Buttons.forEach(Button => {
        Button.textContent = 'Weiter Lesen';
    });

    // Removes all appearances of the Word: "(Meldungen)"
    const Titels = document.querySelectorAll('h4 a');
    Titels.forEach(Titel => {
        const originalText = Titel.textContent;
        const modifiedText = originalText.replace(/\(Meldung\)/g, '');
        Titel.textContent = modifiedText;
    });
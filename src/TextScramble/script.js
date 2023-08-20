window.onload = function () {
  const links = document.querySelectorAll("a.cipher");
  const solveMilliseconds = 800;
  const characterSelectionMilliseconds = 40;
  const delayMilliseconds = 300;
  const characters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890*#@/*!%&^"];

  // Get the audio element
  const typeSound = document.getElementById("typeSound");

  const randomArrayElement = (arr) => {
    return arr[(arr.length * Math.random()) | 0];
  };

  function scrambleText(element) {
    if (element.classList.contains("active") == false) {
      let delay = 0;
      const elementText = element.innerText;
      const elementCharacters = [...elementText];
      const lockMilliseconds =
        delayMilliseconds * elementCharacters.length + solveMilliseconds;

      element.classList.add("active");

      // Hide the original text
      element.innerText = "";

      setTimeout(() => {
        element.classList.remove("active");

        // Restore the original text
        element.innerText = elementText;
      }, lockMilliseconds);

      elementCharacters.forEach((character, index) => {
        setTimeout(
          () => {
            let intervalId = setInterval(() => {
              const randomCharacter = randomArrayElement(characters);
              element.innerText = replaceCharacter(
                element.innerText,
                index,
                randomCharacter
              );

              // Play the sound effect
              typeSound.play();

              setTimeout(() => {
                clearInterval(intervalId);
                element.innerText = replaceCharacter(
                  element.innerText,
                  index,
                  elementCharacters[index]
                );
              }, solveMilliseconds);
            }, characterSelectionMilliseconds);
          },
          delay === 0 ? (delay += 1) : (delay += delayMilliseconds)
        );
      });
    }
  }

  function replaceCharacter(str, index, chr) {
    return `${str.substring(0, index)}${chr}${str.substring(index + 1)}`;
  }

  // Call scrambleText function on each link after the page has loaded
  links.forEach((element) => {
    scrambleText(element);
  });
};

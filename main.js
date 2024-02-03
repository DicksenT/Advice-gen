async function advice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      console.log(response.status);
    }
    const result = await response.json();
    console.log(result.slip);
  } catch (error) {
    console.error(error);
  }
}
advice();

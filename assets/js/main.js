const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded");

  $.querySelector("#btw-display").addEventListener("click", () => {
    console.log("cliqued!");

    $.querySelector(".hidden").classList.toggle("display");
  });

  $.querySelector("contact-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:3000/send-email", {
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      message: $.querySelector("#message").value,
      subject: $.querySelector("#subject").value,
    });
    console.log(response.data);
    alert("Welcome my lord");
  });
});

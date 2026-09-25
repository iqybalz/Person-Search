async function searchPerson() {

  const firstName =
    document.getElementById("firstName")
      .value.trim();

  const lastName =
    document.getElementById("lastName")
      .value.trim();

  const location =
    document.getElementById("location")
      .value.trim();

  const status =
    document.getElementById("status");

  const results =
    document.getElementById("results");


  if (!firstName || !lastName) {

    status.textContent =
      "[!] FIRST AND LAST NAME REQUIRED";

    results.innerHTML = "";

    return;
  }


  status.textContent =
    "[*] SEARCHING PUBLIC SOURCES...";

  results.innerHTML = "";


  /*
    DEMO PUBLIC-DATA RESULTS

    Replace this section later with
    an authorized public-data API.
  */

  await new Promise(
    resolve => setTimeout(resolve, 900)
  );


  const person = {

    name:
      `${firstName} ${lastName}`,

    location:
      location || "Not publicly listed",

    school:
      "Not found",

    organization:
      "Not found",

    credential:
      "Not found",

    source:
      "Public sources",

    match:
      "Name match only"
  };


  status.textContent =
    "[+] SEARCH COMPLETE";


  results.innerHTML = `

    <div class="person">

      <h2>
        ${escapeHTML(person.name)}
      </h2>


      <div class="field">

        <span class="label2">
          CITY / REGION:
        </span>

        <span class="value">
          ${escapeHTML(person.location)}
        </span>

      </div>


      <div class="field">

        <span class="label2">
          SCHOOL:
        </span>

        <span class="value">
          ${escapeHTML(person.school)}
        </span>

      </div>


      <div class="field">

        <span class="label2">
          ORGANIZATION:
        </span>

        <span class="value">
          ${escapeHTML(person.organization)}
        </span>

      </div>


      <div class="field">

        <span class="label2">
          PUBLIC CREDENTIAL:
        </span>

        <span class="value">
          ${escapeHTML(person.credential)}
        </span>

      </div>


      <div class="field">

        <span class="label2">
          MATCH:
        </span>

        <span class="value">
          ${escapeHTML(person.match)}
        </span>

      </div>


      <div class="source">

        SOURCE:
        ${escapeHTML(person.source)}

      </div>


      <div class="notice">

        ⚠ A name alone does not establish
        someone's identity. Verify results
        using independent public sources.

      </div>

    </div>

  `;
}


function escapeHTML(value) {

  return String(value)

    .replace(/&/g, "&amp;")

    .replace(/</g, "&lt;")

    .replace(/>/g, "&gt;")

    .replace(/"/g, "&quot;")

    .replace(/'/g, "&#039;");
}

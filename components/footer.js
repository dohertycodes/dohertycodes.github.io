let submitted = false;
let footer = `
    <meta charset="UTF-8">
    <h3 class="footer-text"><a href="https://github.com/DohertyCodes" target="_blank">Made with ♥ by Doherty Codes ©<span class="year"></span></a></h3>
    <!-- Once someone makes a club Google Account and sets up a form, this can be enabled
    
    <form action="" target="hidden_iframe" onsubmit="submitted=true;"> https://github.com/toperkin/staticFormEmails/blob/master/README.md
        <fieldset id="contact-form">
            <label>First Name: <input type="text" name="" required></label>
            <label>Last Name: <input type="text" name="" required></label>
            <label>E-Mail: <input type="email" name="" required></label>
            <label>Questions and Comments:
                <textarea name="" rows="3" cols="30" placeholder="Let us know what you think!"></textarea>
            </label>
            <input type="submit" value="Submit" id="submit">
        </fieldset>
    </form>
    <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) {}"></iframe>
    <div id="confirmation">Thank you! Your response has been submitted!</div>
    -->
`;

document.getElementById("footer").innerHTML = footer;

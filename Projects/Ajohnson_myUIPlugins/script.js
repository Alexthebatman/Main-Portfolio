// handles the tabs (not the bar one, you still gotta pay for that one)

$(document).ready(function() {
    $("#tabs").tabs();

// slider section (sets mins and maxes and current state, it also updates the text for each of them)
    
    $("#fighter-strength").slider({
        min: 0,
        max: 100,
        value: 50,
        slide: function(event, ui) {
            $("#fighter-strength-val").text(ui.value);
            $("#fighter-speed-val").text(100 - ui.value);
        }
    });
    
    $("#runner-speed").slider({
        min: 0,
        max: 100,
        value: 50,
        slide: function(event, ui) {
            $("#runner-speed-val").text(ui.value);
            $("#runner-stamina-val").text(100 - ui.value);
        }
    });
    
    $("#mage-power").slider({
        min: 0,
        max: 100,
        value: 50,
        slide: function(event, ui) {
            $("#mage-power-val").text(ui.value);
            $("#mage-cast-val").text(100 - ui.value);
        }
    });

    // i know this is confusing and scary.. but, this part handles the a.. acc- accuator (acuatator? accuator..? frick it im looking it up. OHH its actuator, that's dumb) on my car's window system. Nah it's the accordion Lol
    $("#accordion").accordion();


    // the popup when you click become GOD AND CREATE A HERO AND SAVE THE WORLD AND START A RELIGION AND CLAIM THE WORLD AS YOUR OW- i need to take my non-existent meds
    $("#dialog").dialog({
        autoOpen: false
    });

    
    $("#create-btn").click(function() {
        // figure out which tab is selected
        var active = $("#tabs").tabs("option", "active");
        var classname, stat1name, stat1value, stat2name, stat2value, message;
        
        if (active === 0) {
            classname = "Fighter";
            stat1name = "Strength";
            stat1value = parseInt($("#fighter-strength-val").text());
            stat2name = "Speed";
            stat2value = parseInt($("#fighter-speed-val").text());
        } else if (active === 1) {
            classname = "Runner";
            stat1name = "Stamina";
            stat1value = parseInt($("#runner-stamina-val").text());
            stat2name = "Speed";
            stat2value = parseInt($("#runner-speed-val").text());
        } else {
            classname = "Mage";
            stat1name = "Spell Power";
            stat1value = parseInt($("#mage-power-val").text());
            stat2name = "Cast Speed";
            stat2value = parseInt($("#mage-cast-val").text());
        }
        
        // pick the message
        if (stat1value > stat2value) {
            message = "They're gonna beat someone up real good.";
        } else if (stat2value > stat1value) {
            message = "Aww are they running away from me like a siss- CRAP THERES A BEAR BEHIND ME";
        } else {
            message = "Perfectly balanced, now make them UNBALANCED.";
        }
        
        // magically put it in the dialog
        $("#final-stats").html(
            "<p><strong>Class:</strong> " + classname + "</p>" +
            "<p><strong>" + stat1name + ":</strong> " + stat1value + "</p>" +
            "<p><strong>" + stat2name + ":</strong> " + stat2value + "</p>" +
            "<p><em>" + message + "</em></p>"
        );
        
        $("#dialog").dialog("open");
    });
});

// i will say, ai is great for debugging that missing ;, but it can never match my comedy (i mean the comedy that only I laugh at.)
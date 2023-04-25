var taskComplete = false;
let workspace = null;

function openHint() {
  let x = document.getElementById("hint");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function checkmark() {
  let x = document.getElementById("checkmark");
  if (taskComplete === true) {
    x.style.display = "block";
  }
}

function textChange() {
  const y = document.getElementsByClassName("blocklyText");
  for (let i = 0; i < y.length; i++) {
    console.log(i);

    if (i.style.fill === "rgb(182, 180, 175)") y[(i.style.color = "#f0f")];
  }
}

const categoryToolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Logik",

      contents: [
        {
          kind: "block",
          type: "controls_if",
        },
        {
          kind: "block",
          type: "logic_compare",
        },
        {
          kind: "block",
          type: "logic_operation",
        },
        {
          kind: "block",
          type: "logic_negate",
        },
        {
          kind: "block",
          type: "logic_boolean",
        },
        {
          kind: "block",
          type: "logic_null",
        },
        {
          kind: "block",
          type: "logic_ternary",
        },
      ],
      categorystyle: "logic_category",
    },
    {
      kind: "category",
      name: "Loopar",
      contents: [
        {
          kind: "block",
          type: "controls_repeat_ext",
          inputs: {
            TIMES: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: "10",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "controls_whileUntil",
        },
        {
          kind: "block",
          type: "controls_for",
          inputs: {
            FROM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: "1",
                },
              },
            },
            TO: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: "10",
                },
              },
            },
            BY: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: "1",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "controls_forEach",
        },
        {
          kind: "block",
          type: "controls_flow_statements",
        },
      ],
      categorystyle: "loop_category",
    },
    {
      kind: "category",
      name: "Matematik",
      contents: [
        {
          kind: "block",
          type: "math_number",
          fields: {
            NUM: "123",
          },
        },
        {
          kind: "block",
          type: "math_arithmetic",
          inputs: {
            A: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: "1",
                },
              },
            },
            B: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: "1",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_single",
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: "9",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_trig",
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: "45",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_constant",
        },
        {
          kind: "block",
          type: "math_number_property",
          inputs: {
            NUMBER_TO_CHECK: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: "0",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_round",
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: "3.1",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_on_list",
        },
        {
          kind: "block",
          type: "math_modulo",
          inputs: {
            DIVIDEND: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: "64",
                },
              },
            },
            DIVISOR: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: "10",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_constrain",
          inputs: {
            VALUE: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: "50",
                },
              },
            },
            LOW: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: "1",
                },
              },
            },
            HIGH: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: "100",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_random_int",
          inputs: {
            FROM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: "1",
                },
              },
            },
            TO: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: "100",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_random_float",
        },
        {
          kind: "block",
          type: "math_atan2",
          inputs: {
            X: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: "1",
                },
              },
            },
            Y: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: "1",
                },
              },
            },
          },
        },
      ],
      categorystyle: "math_category",
    },
    {
      kind: "category",
      name: "Text",
      contents: [
        {
          kind: "block",
          type: "text",
        },
        {
          kind: "block",
          type: "text_join",
        },
        {
          kind: "block",
          type: "text_append",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_length",
          inputs: {
            VALUE: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_isEmpty",
          inputs: {
            VALUE: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: null,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_indexOf",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
                fields: {
                  VAR: "{textVariable}",
                },
              },
            },
            FIND: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_charAt",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
                fields: {
                  VAR: "{textVariable}",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_getSubstring",
          inputs: {
            STRING: {
              block: {
                type: "variables_get",
                fields: {
                  VAR: "{textVariable}",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_changeCase",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_trim",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_print",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_prompt_ext",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
      ],
      categorystyle: "text_category",
    },
    {
      kind: "category",
      name: "Variabler",
      contents: [],
      custom: "VARIABLE",
      categorystyle: "variable_category",
    },
  ],
};
Blockly.Themes.Knowit = Blockly.Theme.defineTheme("knowit", {
  base: Blockly.Themes.Classic,
  categoryStyles: {
    logic_category: {
      colour: "#b7debd",
    },
    loop_category: {
      colour: "#7c3647",
    },
    math_category: {
      colour: "#fac0b1",
    },
    text_category: {
      colour: "#4b6455",
    },
    variable_category: {
      colour: "#E4E1DB",
    },
  },
  blockStyles: {
    logic_blocks: {
      colourPrimary: "#b7debd",
    },
    loop_blocks: {
      colourPrimary: "#7c3647",
      colourSecondary: "#ff0000",
      colourTertiary: "#C5EAFF",
    },
    math_blocks: {
      colourPrimary: "#fac0b1",
    },
    text_blocks: {
      colourPrimary: "#4b6455",
      colourSecondary: "#93a399",
      colourTertiary: "#C5EAFF",
    },
    variable_blocks: {
      colourPrimary: "#E4E1DB",
    },
  },
  componentStyles: {
    workspaceBackgroundColour: "#333",
    toolboxBackgroundColour: "#333",
    toolboxForegroundColour: "#fff",
    flyoutBackgroundColour: "#121212",
    flyoutForegroundColour: "#ccc",
    flyoutOpacity: 0.8,
    scrollbarColour: "#e4e1db",
    insertionMarkerColour: "#e4e1db",
    insertionMarkerOpacity: 0.3,
    scrollbarOpacity: 0.4,
    cursorColour: "#e4e1db",
    blackBackground: "#333",
  },
  fontStyle: {
    family: "Arial",
    size: 10,
  },
});

//const workspace = Blockly.inject("blocklyDiv", { toolbox: toolbox });

function start() {
  // Create main workspace.
  workspace = Blockly.inject("blocklyDiv", {
    toolbox: categoryToolbox,
    theme: Blockly.Themes.Knowit,
  });
}

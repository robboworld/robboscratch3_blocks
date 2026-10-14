'use strict';

goog.provide('Blockly.Blocks.quadcopter');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['copter_fly_up'] = {
  /**
   * Block to fly up.
   * @this Blockly.Block
   */
  init: function(locale) {

  //  console.log("copter_fly_up init: " + locale);

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_FLY_UP,

      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_land'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_LAND,

      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_stop'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_STOP,

      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_fly'] = {
  /**
   * Fly in a direction for a distance or for a time: `fly [forward ▾] (0.4) [meters ▾]`.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.COPTER_FLY,
      "args0": [
        {
          "type": "input_value",
          "name": "DIRECTION"
        },
        {
          "type": "input_value",
          "name": "AMOUNT"
        },
        {
          "type": "field_dropdown",
          "name": "UNIT",
          "options": [
            [Blockly.Msg.COPTER_UNIT_METERS, "meters"],
            [Blockly.Msg.COPTER_UNIT_SECONDS, "seconds"]
          ]
        }
      ],
      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_fly_to_coords'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_FLY_TO_COORDS,
      "args0": [

        {
          "type": "input_value",
          "name": "X_COORD"
        },
        {
          "type": "input_value",
          "name": "Y_COORD"
        },
        {
          "type": "input_value",
          "name": "Z_COORD"
        }
      ],
      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_rotate'] = {
  /**
   * Block to land.
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_ROTATE,
      "args0": [
        {
          "type": "input_value",
          "name": "SIDE"
        },
        {
          "type": "input_value",
          "name": "DEGREES"
        }
      ],
      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_turn_sides'] = {
  /**
   * Dropdown reporter: turn left / right (grey slot, like copter_directions).
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "COPTER_TURN_SIDE",
          "options": [
            [Blockly.Msg.COPTER_TURN_SIDE_RIGHT, 'right'],
            [Blockly.Msg.COPTER_TURN_SIDE_LEFT, 'left']
          ]
        }
      ],

      "colour": Blockly.Colours.quadcopter.secondary,
      "colourSecondary": Blockly.Colours.quadcopter.secondary,
      "colourTertiary": Blockly.Colours.quadcopter.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['copter_directions'] = {
  /**
   * Relative flight direction dropdown (same pattern as robot_directions).
   * @this Blockly.Block
   */
  init: function(locale) {

    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "COPTER_DIRECTIONS",
          "options": [
            [Blockly.Msg.COPTER_DIRECTION_FORWARD,  'direction_forward'],
            [Blockly.Msg.COPTER_DIRECTION_BACKWARD, 'direction_backward'],
            [Blockly.Msg.COPTER_DIRECTION_LEFT,     'direction_left'],
            [Blockly.Msg.COPTER_DIRECTION_RIGHT,    'direction_right'],
            [Blockly.Msg.COPTER_DIRECTION_UP,       'direction_up'],
            [Blockly.Msg.COPTER_DIRECTION_DOWN,     'direction_down']
          ]
        }
      ],

      "colour": Blockly.Colours.quadcopter.secondary,
      "colourSecondary": Blockly.Colours.quadcopter.secondary,
      "colourTertiary": Blockly.Colours.quadcopter.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['copter_axes'] = {
  init: function(locale) {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "COPTER_AXIS",
          "options": [
            ["X", "X"],
            ["Y", "Y"],
            ["Z", "Z"]
          ]
        }
      ],
      "colour": Blockly.Colours.quadcopter.secondary,
      "colourSecondary": Blockly.Colours.quadcopter.secondary,
      "colourTertiary": Blockly.Colours.quadcopter.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['copter_move_axis_to'] = {
  init: function(locale) {
    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_MOVE_AXIS_TO,
      "args0": [
        {
          "type": "input_value",
          "name": "AXIS"
        },
        {
          "type": "input_value",
          "name": "COORD"
        }
      ],
      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_is_flying'] = {
  init: function(locale) {
    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_IS_FLYING,
      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "output_boolean"]
    });
  }
};

Blockly.Blocks['copter_set_speed'] = {
  init: function(locale) {
    this.jsonInit({
      "message0":  Blockly.Msg.COPTER_SET_SPEED,
      "args0": [
        {
          "type": "input_value",
          "name": "SPEED"
        }
      ],
      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

/**
 * Numbers of the copters in the project (connected copters or simulator sprites); the GUI keeps it
 * up to date. A saved number that is not in the list still shows as is.
 * @type {!Array<number>}
 */
Blockly.Blocks.quadcopter.copterNumbers = [];

/** `copters [N] do` menu: all copters, then the copters in the project (a variable or "1, 3" / "1-3" also works). */
Blockly.Blocks.quadcopter.copterNumberOptions = function() {
  var numbers = Blockly.Blocks.quadcopter.copterNumbers;
  if (!numbers || numbers.length === 0) {
    numbers = [1];
  }
  var options = [[Blockly.Msg.COPTER_ALL, "all"]];
  for (var i = 0; i < numbers.length; i++) {
    options.push([String(numbers[i]), String(numbers[i])]);
  }
  return options;
};

Blockly.Blocks['copter_copters_menu'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "COPTERS",
          "options": Blockly.Blocks.quadcopter.copterNumberOptions
        }
      ],
      "colour": Blockly.Colours.quadcopter.secondary,
      "colourSecondary": Blockly.Colours.quadcopter.secondary,
      "colourTertiary": Blockly.Colours.quadcopter.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['copter_with_copters'] = {
  /**
   * C-block: blocks inside drive the selected copter (a number or a variable).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.COPTER_WITH_COPTERS,
      "message1": "%1",
      "args0": [
        {
          "type": "input_value",
          "name": "COPTERS"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

Blockly.Blocks['copter_value'] = {
  /**
   * Reporter: a property of the copter (of the copter chosen by `copters [N] do`). `flying?` stays
   * a separate boolean block: only it fits into `if` / `wait until`.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.COPTER_VALUE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PROPERTY",
          "options": [
            [Blockly.Msg.COPTER_PROPERTY_X, "x"],
            [Blockly.Msg.COPTER_PROPERTY_Y, "y"],
            [Blockly.Msg.COPTER_PROPERTY_Z, "z"],
            [Blockly.Msg.COPTER_PROPERTY_YAW, "yaw"],
            [Blockly.Msg.COPTER_PROPERTY_BATTERY, "battery"],
            [Blockly.Msg.COPTER_PROPERTY_LINK, "link"],
            [Blockly.Msg.COPTER_PROPERTY_SPEED, "speed"]
          ]
        }
      ],
      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "output_number"]
    });
  }
};

Blockly.Blocks['copter_value_of'] = {
  /**
   * Reporter: a property of any copter, independent of the selected copter.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.COPTER_VALUE_OF,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PROPERTY",
          "options": [
            [Blockly.Msg.COPTER_PROPERTY_X, "x"],
            [Blockly.Msg.COPTER_PROPERTY_Y, "y"],
            [Blockly.Msg.COPTER_PROPERTY_Z, "z"],
            [Blockly.Msg.COPTER_PROPERTY_YAW, "yaw"],
            [Blockly.Msg.COPTER_PROPERTY_BATTERY, "battery"],
            [Blockly.Msg.COPTER_PROPERTY_FLYING, "flying"],
            [Blockly.Msg.COPTER_PROPERTY_LINK, "link"],
            [Blockly.Msg.COPTER_PROPERTY_SPEED, "speed"]
          ]
        },
        {
          "type": "input_value",
          "name": "COPTER"
        }
      ],
      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "output_number"]
    });
  }
};

Blockly.Blocks['copter_charge_battery'] = {
  /**
   * Simulator: set the copter battery level (a real battery charges on its charger).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.COPTER_CHARGE_BATTERY,
      "args0": [
        {
          "type": "input_value",
          "name": "PERCENT"
        }
      ],
      "category": Blockly.Categories.quadcopter,
      "extensions": ["colours_quadcopter", "shape_statement"]
    });
  }
};

/**
 * Old copter blocks, no longer supported: kept with their inputs so old projects open without
 * losing values. The block says what replaced it; the VM does nothing for it. Old blocks with a
 * direct replacement (`fly N meters`, `X position` …) are converted when a project loads, their
 * definitions here only show up for blocks from the backpack.
 */
Blockly.Blocks.quadcopter.LEGACY_COLOURS = {
  primary: '#8c8c8c',
  secondary: '#7a7a7a',
  tertiary: '#6a6a6a'
};

/**
 * @param {string} type block type
 * @param {string} noticeKey Blockly.Msg key of the notice
 * @param {!Array<string>} inputs names of the old value inputs
 * @param {string} shape "shape_statement", "output_number" or "output_string"
 */
Blockly.Blocks.quadcopter.defineLegacyBlock = function(type, noticeKey, inputs, shape) {
  Blockly.Blocks[type] = {
    init: function() {
      var message = '⚠ ' + Blockly.Msg[noticeKey];
      var args = [];
      for (var i = 0; i < inputs.length; i++) {
        message += ' %' + (i + 1);
        args.push({"type": "input_value", "name": inputs[i]});
      }
      var colours = Blockly.Blocks.quadcopter.LEGACY_COLOURS;
      this.jsonInit({
        "message0": message,
        "args0": args,
        "category": Blockly.Categories.quadcopter,
        "colour": colours.primary,
        "colourSecondary": colours.secondary,
        "colourTertiary": colours.tertiary,
        "extensions": [shape]
      });
    }
  };
};

[
  ['copter_fly_distance', 'COPTER_LEGACY_USE_FLY', ['DIRECTION', 'METERS'], 'shape_statement'],
  ['copter_fly_time', 'COPTER_LEGACY_USE_FLY', ['DIRECTION', 'SECONDS'], 'shape_statement'],
  ['copter_fly_for_time_with_speed', 'COPTER_LEGACY_USE_FLY_TIME', ['SECONDS', 'X_SPEED', 'Y_SPEED'], 'shape_statement'],
  ['copter_change_x_by', 'COPTER_LEGACY_USE_MOVE_AXIS', ['DISTANCE_DELTA'], 'shape_statement'],
  ['copter_change_y_by', 'COPTER_LEGACY_USE_MOVE_AXIS', ['DISTANCE_DELTA'], 'shape_statement'],
  ['copter_change_z_by', 'COPTER_LEGACY_USE_MOVE_AXIS', ['DISTANCE_DELTA'], 'shape_statement'],
  ['copter_fly_for_seconds_to_coords', 'COPTER_LEGACY_USE_FLY_TO_COORDS', ['SECONDS', 'X_COORD', 'Y_COORD', 'Z_COORD'], 'shape_statement'],
  ['copter_set_direction', 'COPTER_LEGACY_DIRECTION', ['DIRECTION'], 'shape_statement'],
  ['copter_reset_local_position', 'COPTER_LEGACY_RESET_POSITION', [], 'shape_statement'],
  ['copter_direction', 'COPTER_LEGACY_DIRECTION', [], 'output_string'],
  ['copter_x_coord', 'COPTER_LEGACY_USE_VALUE', [], 'output_number'],
  ['copter_y_coord', 'COPTER_LEGACY_USE_VALUE', [], 'output_number'],
  ['copter_z_coord', 'COPTER_LEGACY_USE_VALUE', [], 'output_number'],
  ['copter_yaw', 'COPTER_LEGACY_USE_VALUE', [], 'output_number'],
  ['copter_battery', 'COPTER_LEGACY_USE_VALUE', [], 'output_number'],
  ['copter_speed', 'COPTER_LEGACY_USE_VALUE', [], 'output_number']
].forEach(function(legacy) {
  Blockly.Blocks.quadcopter.defineLegacyBlock(legacy[0], legacy[1], legacy[2], legacy[3]);
});

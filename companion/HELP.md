# Focusrite Clarett Module

Control your Focusrite Clarett audio interface directly from Companion without using Focusrite Control's GUI.

## Requirements

- **Focusrite Control** software must be installed (but does not need to be running)
- **FocusriteControlServer** service must be running (automatically starts with macOS)
- Clarett interface connected via Thunderbolt

## Setup

1. Add the Focusrite Clarett module in Companion
2. Configure the connection (default: localhost:49152)
3. **Important:** When you first connect, you need to approve the connection in Focusrite Control:
   - Open Focusrite Control
   - A popup will appear asking to approve "Companion-Focusrite"
   - Click "Approve"

## Actions

### Input Controls
- **Mute Input** - Mute/unmute mixer inputs (1-18)
- **Solo Input** - Solo/unsolo mixer inputs
- **Set Input Gain** - Set preamp gain (0-65535)
- **Set Fader** - Set mixer fader level for a specific mix bus
- **Set Pan** - Set pan position (-100 to 100)

### Hardware Controls
- **Phantom Power (48V)** - Enable/disable phantom power on inputs 1-8
- **Pad (-10dB)** - Enable/disable input pad
- **Air Mode** - Enable/disable Focusrite Air mode
- **High Pass Filter** - Enable/disable HPF
- **Phase Invert** - Invert input phase
- **Stereo Link** - Link adjacent inputs as stereo pair

### Output Controls
- **Mute Output** - Mute/unmute outputs
- **Set Output Volume** - Set output level (0-65535)

### Monitor Controls
- **Dim Output** - Toggle dim mode
- **Talkback** - Activate talkback (momentary or toggle)

### Advanced
- **Set Raw Value** - Send any control value by item ID
- **Toggle Raw Value** - Toggle any boolean control

## Feedbacks

All boolean controls have corresponding feedbacks for button states:

- Input Muted (red)
- Input Soloed (yellow)
- Phantom Power Enabled (orange)
- Pad Enabled (blue)
- Air Mode Enabled (cyan)
- High Pass Filter Enabled (purple)
- Phase Inverted (pink)
- Dim Enabled (olive)
- Talkback Enabled (green)
- Stereo Linked (dark green)

## Presets

Pre-configured button presets are available for:

- Input mutes (1-8)
- Input solos (1-8)
- Phantom power (1-8)
- Air mode (1-8)
- Pad (1-8)
- HPF (1-8)
- Dim
- Talkback (momentary)

## Variables

The module exposes variables for:

- Device name and model
- Connection status
- Input gains and states
- Output volumes
- Monitor states

## Troubleshooting

### "Waiting for approval..."
Open Focusrite Control and approve the Companion connection.

### "Connection refused"
Make sure FocusriteControlServer is running:
```bash
ps aux | grep -i focusrite
```

### Controls not working
The item IDs may differ between Clarett models. Use the "Set Raw Value" action with debug logging to discover the correct IDs for your device.

## Protocol

This module communicates with the FocusriteControlServer using TCP/XML protocol:

- **Port:** 49152 (configurable)
- **Message format:** `Length=XXXXXX <xml-content>` (Length PREFIX with space)

## Acknowledgments

- **Linus Wileryd** — [github.com/lnswlrd](https://github.com/lnswlrd)  
  Module development, protocol research via packet capture, device structure analysis and the XML schema including mixes, inputs, outputs and hardware controls

- **Focusrite Midi Control** by Radu Varga — [GitHub](https://github.com/raduvarga/Focusrite-Midi-Control)  
  TCP message format, client-key requirement, keep-alive mechanism, device subscription flow

- **Focusrite Control API** by Mathieu2301 — [GitHub](https://github.com/Mathieu2301/Focusrite-Control-API)  
  XML command structure, device discovery format

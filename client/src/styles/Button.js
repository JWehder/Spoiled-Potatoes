import styled from "styled-components"
import Button from 'react-bootstrap/Button';

const COLORS = {
    primary: {
        "--main": "#E92EFB",
        "--accent": "white"
    },
    secondary: {
        "--main": "f0f8ff",
        "--accent": "010203"
    }
}

function CustomButton({ variant = "full", color = "primary", ...props }) {
    let Component;
    if (variant === "full") {
      Component = PrimaryButton;
    } else if (variant === "outline") {
      Component = SecondaryButton;
    }
  
    return <Component style={COLORS[color]} {...props} />;
  }

const ButtonBase = styled(Button)`
    border: 1px solid transparent;
    padding: 8px 16px;
`;

const PrimaryButton = styled(ButtonBase)`
    background-color: var(--main);
    color: var(--accent);

    &:hover {
    opacity: 0.9;
    }
`

const SecondaryButton = styled(ButtonBase)`
    background-color: white;
    color: var(--main);
    border: 2px solid var(--main);

    &:hover {
    background: hsl(235deg 85% 97%);
    }
`

export default CustomButton;
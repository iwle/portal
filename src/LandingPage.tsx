import { AnchorButton, Button, ButtonGroup, FormGroup, InputGroup } from '@blueprintjs/core';
import './App.css';

function LandingPage() {
    return (
        <div className="LandingPage">
            <FormGroup
                helperText="Helper text with details..."
                label="Label A"
                labelFor="text-input"
                labelInfo="(required)"
            >
                <InputGroup id="text-input" placeholder="Placeholder text" />
            </FormGroup>
        </div>
    );
}

export default LandingPage;

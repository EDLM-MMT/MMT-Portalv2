

export default function Checkbox({ label, value, name, onChange, index, testid }) {

    return (
        <label>
            <input
                type="checkbox"
                id={`${index}`}
                name={name}
                checked={value}
                onChange={onChange}
                data-testid={testid}
                className="m-2"
            />
            {label}
        </label>
    );
}

import Multiselect from 'multiselect-react-dropdown';

function MultiSelectDropdown({ placeholder = 'Search ...', emptyRecordMsg = 'Empty option', options = null, selectedValues = null, onSelect, onRemove }) {

    const handleOnSelect = (selectedList, currentSelect) => {
        if (onSelect) {
            onSelect(selectedList, currentSelect)
        }
    }

    const handleOnRemove = (selectedList, currentSelect) => {
        if (onRemove) {
            onRemove(selectedList, currentSelect)
        }
    }

    return (
        <Multiselect
            onRemove={handleOnRemove}
            onSelect={handleOnSelect}
            options={options}
            selectedValues={selectedValues}
            emptyRecordMsg={emptyRecordMsg}
            placeholder={placeholder}
            className="mr-3"
            displayValue="name"
            id="css_custom"
            style={{
                chips: {
                    background: 'green',
                },
                multiselectContainer: {
                    color: 'green',
                },
                searchWrapper: {
                    color: '#8898aa',
                },
                searchBox: {
                    boxShadow:
                        '0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)',
                    transition: 'box-shadow 0.15s ease',
                    borderRadius: '4px',
                    border: 0,
                    minHeight: '43px',
                },
                optionContainer: {
                    boxShadow:
                        '0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)',
                    transition: 'box-shadow 0.15s ease',
                    borderRadius: '4px',
                    border: 0,
                },
            }}
        />
    )
}

export default MultiSelectDropdown
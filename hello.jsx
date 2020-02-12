class StoreSelect extends React.Component {
  render () {
    var {label, name, options, onChange, value} = this.props 
    return (
      <div>
        <label>{label}</label>
        <select name={name} onChange={onChange} value={value || ''}>
          <option />
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
    )
  }
}

class Store extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedEmployee: null,
      requestedInfo: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  render () {
    var {prompt, employees} = this.props
    var {selectedEmployee, requestedInfo} = this.state
    var info = ''
    if (selectedEmployee && requestedInfo) {
      info = employees.find((e) => e.title == selectedEmployee)[requestedInfo]
    }
    return (
      <div>
        <p>{prompt}</p>
        <StoreSelect
          label="Employee"
          name="selectedEmployee"
          onChange={this.handleChange}
          value={selectedEmployee}
          options={employees.map((e) => e.title)}
        />
        <StoreSelect
          label="Information"
          name="requestedInfo"
          onChange={this.handleChange}
          value={requestedInfo}
          options={['firstName', 'lastName', 'age']}
        />
        <p id="result">{info}</p>
      </div>
    )
  }

  handleChange (event) {
    var stateChange = {}
    stateChange[event.target.name] = event.target.value
    this.setState(stateChange)
  }
}

var employees = [
  {
    title: 'Manager',
    firstName: 'Eva',
    lastName: 'Breton',
    age: 34
  },
  {
    title: 'Asst. Manager',
    firstName: 'Diya',
    lastName: 'Mehta',
    age: 26
  }
]

ReactDOM.render(
  <Store 
   prompt="What information do you want?"
   employees={employees}
  />,
  document.getElementById('container')
)

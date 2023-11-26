import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeInputSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSearchInput = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput),
    )
    return (
      <div className="app-container">
        <div className="google-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-img"
          />
          <div className="search-container">
            <div className="input-search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className=""
                alt="search-logo"
              />
              <input
                type="search"
                placeholder="Search Google"
                onChange={this.onChangeInputSearch}
              />
            </div>
            <ul>
              {searchResult.map(eachItem => (
                <SuggestionItem
                  key={eachItem.key}
                  updateSearchInput={this.updateSearchInput}
                  searchInfo={eachItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions

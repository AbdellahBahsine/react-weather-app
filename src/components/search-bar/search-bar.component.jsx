import "./search-bar.component.css";

const SearchBar = ({handleChange, getWeather, city, error}) => {
    return (
        <div className="search-bar">
            <div className="wrapper">
                <input
                    type="text"
                    placeholder="Search for a city..."
                    value={city}
                    onChange={handleChange}
                />
                <button onClick={getWeather}>Search</button>
            </div>
            {error && <div className="alert"><p className="error">Please enter a valid city!</p> <i className="fas fa-exclamation-circle error-icon"></i></div>}
        </div>
    )
}

export default SearchBar;
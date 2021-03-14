import "./search-bar.component.css";

const SearchBar = ({handleChange, getWeather, city, error}) => {
    return (
        <div className="search-bar">
            <div className="wrapper">
                <input
                    type="text"
                    placeholder="Search For a City..."
                    value={city}
                    onChange={handleChange}
                />
                <button onClick={getWeather}>Search</button>
            </div>
            {error && <div className="alert"><p className="error">Please enter a valid city!</p> <i class="fas fa-exclamation-circle"></i></div>}
        </div>
    )
}

export default SearchBar;
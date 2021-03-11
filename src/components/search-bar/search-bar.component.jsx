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
            {error && <p className="error">Please Enter a Valid City!</p>}
        </div>
    )
}

export default SearchBar;
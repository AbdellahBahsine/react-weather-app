import "./search-bar.component.css";

const SearchBar = ({city, handleChange, getWeather}) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                value={city}
                onChange={handleChange}
            />
            <button onClick={getWeather}>Search</button>
        </div>
    )
}

export default SearchBar;
import React from "react";
import SearchForm from "../components/SearchForm";
import Card from "../components/Card"
import API from "../utils/API";
import Wrapper from "../components/Wrapper";

class Search extends React.Component {
    state = {
        search: "",
        result: []
    };

    componentDidMount() {
        this.searchBook();
    }

    searchBook = (query) => {
        console.log(query)
        API.getBookAPI(query)
            .then(res => {
                console.log(res);
                this.setState({ result: res.data.results })
                console.log(this.state.result):
            })
            .catch(err => console.error(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getBookAPI(this.state.search);

    };

    clearSearch = event => {
        event.preventDefault();
        const clear = this.searchBook();
        return clear;
    }

    render() {
        return (
            <Wrapper>
                <div className="container">
                    <div className="row">
                        <h2>Book Search</h2>
                        <SearchForm
                            search={this.state.search}
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            clearSearch={this.clearSearch}
                        />
                    </div>
                    <div className="row">
                        <h2>Results</h2>
                            <Card
                                _id={this.state.result.items.id}
                                title={this.state.result.items.volumeInfo.title}
                                authors={this.state.result.items.volumeInfo.authors}
                                description={this.state.result.items.volumeInfo.description}
                                image={this.state.result.items.volumeInfo.imageLinks.thumbnail}
                                link={this.state.result.items.volumeInfo.previewLink}
                                key={this.state.result.key}
                            />
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default Search;
import React, { Component } from "react";
import PropTypes from "prop-types";

class SingleBook extends React.Component {
	static PropTypes = {
		book: PropTypes.object.isRequired,
		updateBookShelf: PropTypes.func.isRequired
	};

	state = {
		value: "none"
	};

	render() {
		const { book, updateBookShelf } = this.props;

		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div
							className="book-cover"
							style={{
								width: 128,
								height: 193,
								backgroundImage: ` url("${book.imageLinks
									.smallThumbnail}")`
							}}
						/>
						<div className="book-shelf-changer">
							<select
								onChange={e =>
									updateBookShelf(book, e.target.value)}
								value={book.shelf}
							>
								<option value="none" disabled>
									Move to...
								</option>
								<option value="currentlyReading">
									Currently Reading
								</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<div className="book-title">
						{book.title}
					</div>
					<div className="book-authors">
						{book.authors}
					</div>
				</div>
			</li>
		);
	}
}

export default SingleBook;

import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Textarea, Label, TextInput } from 'flowbite-react';

const EditBooks = () => {
	const { id } = useParams();
	const { imageURL, authorName, bookPDFURL, bookTitle, bookDescription, category } = useLoaderData()

	const bookCategories = [
		"Art",
		"Biography",
		"Business",
		"Children's",
		"Comics",
		"Drama/Play",
		"Fiction",
		"Fantasy",
		"History",
		"Horror",
		"Music",
		"Mystery",
		"Non-Fiction",
		"Poetry",
		"Psychology",
		"Reference",
		"Romance",
		"Science",
		"Science Fiction",
		"Sports",
		"Thriller",
		"Travel",
	]
	const [selectedBookCateg, setselectedBookCateg] = useState(bookCategories[0]);

	const handleChange = (event) => {
		setselectedBookCateg(event.target.value)
	}
	const handleBookUpdate = (event) => {
		event.preventDefault();
		const form = event.target;
		const bookTitle = form.bookTitle.value;
		const category = form.category.value;
		const authorName = form.authorName.value;
		const imageURL = form.imageURL.value;
		const bookPDFURL = form.bookPDFURL.value;
		const bookDescription = form.bookDescription.value;
		const bookObj = {
			bookTitle, category, authorName, imageURL, bookPDFURL, bookDescription
		}

		fetch(`http://localhost:3000/abook/${id}`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(bookObj)
		}).then(res => res.json()).then(data => {
			alert("Book Updated Successfully !!")
		})


	}
	return (
		<div className='px-4 my-12 w-full'>
			<h2 className='mb-8 text-3xl font-bold text-blue-700'>Update Book!</h2>
			<form onSubmit={handleBookUpdate} className="flex  flex-col flex-wrap gap-4 ">
				<div className='flex gap-8 flex-col items-center '>
					<div className='w-5/6'>
						<div className="mb-2 block">
							<Label htmlFor="category" value="Category" />
						</div>
						<select name="category" id="category" className='rounded w-full' defaultValue={category} onChange={handleChange}>
							{
								bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
							}
						</select>
					</div>
					<div className='w-5/6'>
						<div className="mb-2 block">
							<Label htmlFor="bookTitle" value="Book Title" />
						</div>
						<TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required defaultValue={bookTitle} />
					</div>
					<div className='w-5/6'>
						<div className="mb-2 block">
							<Label htmlFor="authorName" value="Author Name" />
						</div>
						<TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required defaultValue={authorName} />
					</div>
					<div className='w-5/6'>
						<div className="mb-2 block">
							<Label htmlFor="imageURL" value="Book Image URL" />
						</div>
						<TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image URL" required defaultValue={imageURL} />
					</div>

					<div className='w-5/6'>
						<div className="mb-2 block">
							<Label htmlFor="bookPDFURL" value="Book PDF URL" />
						</div>
						<TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="Book PDF URL" required defaultValue={bookPDFURL} />
					</div>
					<div className='w-5/6'>
						<div className="mb-2 block">
							<Label htmlFor="bookDescription" value="Book Description" />
						</div>
						<Textarea name="bookDescription" id="bookDescription" placeholder="Write The Book Description..." required rows={4} defaultValue={bookDescription} />

					</div>
					<Button type="submit" className='w-5/6 bg-blue-700'>Update Book</Button>
				</div>


			</form>
		</div>
	)
}

export default EditBooks
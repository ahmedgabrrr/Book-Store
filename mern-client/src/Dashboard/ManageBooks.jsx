import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { HiTrash } from 'react-icons/hi';
const ManageBooks = () => {
	const [allBooks, setAllBooks] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setAllBooks(data));
	})
	const handleDelete = (id) => {
		fetch(`/admin/dashboard/edit-books/${id}`), {
			method: "DELETE",
		}
			.then(res => res.json).then(data => {
				alert("Book Is Deleted!")
				setAllBooks(data)

			})
	}
	return (
		<div className='px-4 my-12'>
			<h2 className='mb-8 text-3xl font-bold text-blue-700'>Manage Your Books!</h2>
			<Table>
				<Table.Head>
					<Table.HeadCell>Book name</Table.HeadCell>
					<Table.HeadCell>Author name</Table.HeadCell>
					<Table.HeadCell>Category</Table.HeadCell>
					<Table.HeadCell>Price</Table.HeadCell>
					<Table.HeadCell></Table.HeadCell>
					<Table.HeadCell></Table.HeadCell>
				</Table.Head>
				{
					allBooks.map((book, index) =>
						<Table.Body className="divide-y" key={book._id}>
							<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
								<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
									{book.bookTitle}
								</Table.Cell>
								<Table.Cell>{book.authorName}</Table.Cell>
								<Table.Cell>{book.category}</Table.Cell>
								<Table.Cell>$25</Table.Cell>
								<Link className='font-medium text-blue-700 hover:underline dark:text-cyan-500' to={`/admin/dashboard/edit-books/${book._id}`}>

									Edit

								</Link>
								<Table.Cell>
									<button onClick={() => handleDelete()}><HiTrash className='text-red-800' /></button>
								</Table.Cell>
							</Table.Row>


						</Table.Body>)
				}
			</Table>
		</div>
	)
}

export default ManageBooks
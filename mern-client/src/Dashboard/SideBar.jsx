import React from 'react'

import { Badge, Sidebar } from 'flowbite-react';
import { HiChartPie, HiInbox, HiOutlineCloudUpload, HiPencil, HiShoppingBag } from 'react-icons/hi';
import Avatar from "../assets/banner-images/me.jpg"
const SideBar = () => {
	return (
		<div>
			<Sidebar className='py-12' aria-label="Sidebar with logo branding example">
				<Sidebar.Logo href="#" img={Avatar} imgAlt="Flowbite logo">
					Ahmed Gabr
				</Sidebar.Logo>
				<Sidebar.Items>
					<Sidebar.ItemGroup>
						<Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
							Dashboard
						</Sidebar.Item>
						<Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
							Upload Book
						</Sidebar.Item>
						<Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
							Manage Books
						</Sidebar.Item>
						<Sidebar.Item href="/admin/dashboard/edit-books/:id" icon={HiPencil}>
							Edit Books
						</Sidebar.Item>
						<Sidebar.Item href="#" icon={HiShoppingBag}>
							Products
						</Sidebar.Item>

					</Sidebar.ItemGroup>
				</Sidebar.Items>
			</Sidebar>
		</div>
	)
}

export default SideBar
import {TableContainer, Tbody, Td, Th, Thead, Tr, Table} from "@chakra-ui/table"
import React from 'react'
import styles from "./ApplicantTable.module.sass"
import {Applicant, FormDataTypes} from 'types'
import {Column, usePagination, useTable} from 'react-table'
import {Box, Button, ButtonGroup, Select} from '@chakra-ui/react'
import {ArrowBackIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowRightIcon} from "@chakra-ui/icons"

interface ApplicantTableProps {
	applicants: Applicant[]
}


export const ApplicantTable = ({applicants}: ApplicantTableProps) => {
	const columns: readonly
		Column<FormDataTypes>[] = React.useMemo(
		() => [
			{
				Header: 'Имя',
				accessor: 'firstName',
			},
			{
				Header: 'Фамилия',
				accessor: 'lastName',
			},
			{
				Header: 'Отчество',
				accessor: 'patronymic',
			},
			{
				Header: 'Email',
				accessor: 'email',
			},
			{
				Header: 'Телефон',
				accessor: 'phone',
			},
			{
				Header: 'Дата рождения',
				accessor: 'birthday',
			},
			{
				Header: 'Социальный статус',
				accessor: 'status',
			},
			{
				Header: 'Регион',
				accessor: 'region',
			},
			{
				Header: 'Город',
				accessor: 'city',
			},
			{
				Header: 'Вид учебного заведения',
				accessor: 'institutionType',
			},
			{
				Header: 'Учебное заведение',
				accessor: 'educationInstitution',
			},
			{
				Header: 'Форма обучения',
				accessor: 'formStudy',
			},
			{
				Header: 'Награды и достижения',
				accessor: 'achievement',
			},
			{
				Header: 'Предполагаемая форма оплаты за обучение в ВУЗе',
				accessor: 'formPayment',
			},
			{
				Header: 'Язык обучения',
				accessor: 'language',
			},
			{
				Header: 'Кафедра-консультант',
				accessor: 'consultant',
			},
			{
				Header: 'Вопрос',
				accessor: 'question',
			},
		],
		[]
	)

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		page,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: {pageIndex, pageSize},
	} = useTable({
		columns,
		data: applicants,
		initialState: {pageIndex: 0, pageSize: 7},
	}, usePagination)

	return (
		<TableContainer boxShadow="2xl" rounded="md">
			<Table {...getTableProps()}>
				<Thead>
					{headerGroups.map((headerGroup) => (
						<Tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<Th
									{...column.getHeaderProps()}
									fontSize="medium" background={"linkedin.800"}
									color="white"
									textAlign="center"
								>
									{column.render('Header')}
								</Th>
							))}
						</Tr>
					))}
				</Thead>
				<Tbody {...getTableBodyProps()}>
					{page.map((row) => {
						prepareRow(row)
						return (
							<Tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<Td {...cell.getCellProps()} textAlign="center"
										>
											{cell.render('Cell')}
										</Td>
									)
								})}
							</Tr>
						)
					})}
				</Tbody>
			</Table>

			<Box
				className={styles.pagination}
			>
				<Select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
					{[10, 20, 30, 40, 50].map((pageSize) => (
						<option key={pageSize} value={pageSize}>
							Показать {pageSize}
						</option>
					))}
				</Select>

				<Box className={styles.buttonGroup}>

					{/*working start*/}
					<Button
						onClick={() => gotoPage(0)} disabled={!canPreviousPage}
						background={"transparent"}
					>
						<ArrowLeftIcon fontSize="md"/>
					</Button>

					<Button
						onClick={() => previousPage()} disabled={!canPreviousPage}
						background={"transparent"}
					>
						<ArrowBackIcon fontSize="2xl"/>
					</Button>
					<Button
						onClick={() => nextPage()} disabled={!canNextPage}
						background={"transparent"}
					>
						<ArrowForwardIcon fontSize="2xl"/>
					</Button>

					<Button
						onClick={() => gotoPage(pageCount - 1)}
						disabled={!canNextPage}
						background={"transparent"}
					>
						<ArrowRightIcon fontSize="md"/>
					</Button>



					{/*working end*/}

				</Box>
				<Box className={styles.pageCount} as="span">
					Страница&nbsp;

					<Box as="strong">
						{pageIndex + 1} из {pageOptions.length}
					</Box>
				</Box>

			</Box>
		</TableContainer>
	)
}


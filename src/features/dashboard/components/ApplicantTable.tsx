import {TableContainer, Tbody, Td, Th, Thead, Tr, Table} from "@chakra-ui/table"
import React, {useMemo} from 'react'
import styles from "./ApplicantTable.module.sass"
import {Applicant, FormDataTypes} from 'types'
import {Column, usePagination, useTable} from 'react-table'
import {Box, Button, Select} from '@chakra-ui/react'
import {ArrowBackIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowRightIcon, DeleteIcon} from "@chakra-ui/icons"
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {deleteApplicant} from 'services'
import {motion} from "framer-motion"

interface ApplicantTableProps {
	applicants: Applicant[]
}

export const ApplicantTable = ({applicants}: ApplicantTableProps) => {
	const queryClient = useQueryClient()
	const {mutateAsync} = useMutation({
		mutationFn: deleteApplicant,
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ["applicants"]}).then(r => console.log(r))
		}
	})

	const columns: readonly
		Column<FormDataTypes & { id: string }>[] = useMemo(
		() => [
			{
				Header: 'id',
				accessor: 'id',
			},
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

	const MotionTd = motion(Td)
	const MotionTr = motion(Tr)

	const handleDelete = (id: string) => {
		mutateAsync(id).then(r => console.log(r))
	}

	return (
		<TableContainer boxShadow="2xl" rounded="md">
			<Table {...getTableProps()}>

				<Thead>
					{headerGroups.map((headerGroup) => (
						<Tr
							{...headerGroup.getHeaderGroupProps()}
						>
							{headerGroup.headers.map((column) => (
								<Th
									{...column.getHeaderProps()}
									fontSize="medium" background={"linkedin.800"}
									color="white"
								>
									{column.render('Header')}
								</Th>
							))}
						</Tr>
					))}
				</Thead>

				<Tbody {...getTableBodyProps()}>
					{page.filter(Boolean).map((row) => {
						if (!row) {
							return null
						}

						prepareRow(row)

						const id: string = row.cells ? row.cells.find((cell) => cell.column.id === 'id')?.value ?? '' : ''

						return (
							<MotionTr
								{...row.getRowProps()}
								initial={{opacity: 0, y: -10}}
								animate={{opacity: 1, y: 0}}
								transition={{duration: 0.5}}
							>
								{row.cells.map((cell, index) => {
									return (
										<MotionTd {...cell.getCellProps()}
												  initial={{opacity: 0, x: -10}}
												  animate={{opacity: 1, x: 0}}
												  transition={{duration: 0.5}}
										>
											{index === 0 ? (
												<Button
													onClick={() => handleDelete(id)}
													colorScheme="red"
													w={6}
													h={8}
													mr={4}
												>
													<DeleteIcon fontSize="md"/>
												</Button>
											) : cell.render('Cell')}
										</MotionTd>
									)
								})}
							</MotionTr>
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


import React from 'react'
import styles from './FormPage.module.sass'
import {Layout} from 'layout/Layout'
import {ContactForm} from 'features'
import {Box, Button, Heading, Text, useMediaQuery} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {buttons} from 'pages/FormPage/buttons'

export const FormPage = () => {
	return (
		<Layout>
			<Box className={styles.form}>
				<Box className={styles.formRow}>
					<Box className={styles.formTop}>
						<Heading
							className={styles.formTitle}
							as="h1"
							fontFamily="Open Sans" fontStyle="italic"
						>
							Әлеуетті талапкердің жеке карточкасы/ Личная карточка потенциального абитуриента
						</Heading>
						<Text fontStyle="italic">
							барлық деректерді жеке куәлік бойынша толтыру қажет / все данные заполнять по удостоверению
							личности*
						</Text>
					</Box>

					<Box className={styles.formRight}>
						<ContactForm/>

						<Box className={styles.formInfo}>
							<Text className={styles.formInfoText} fontFamily="Open Sans">
								Образовательные программы
							</Text>

							<Box
								className={styles.formInfoList} borderWidth="1px"
								rounded="lg"
								shadow="1px 1px 3px rgba(0,0,0,0.3)"
								maxWidth={800}
								width="100%"
								p={6}
							>
								{
									buttons.map(btn => (
										<Link
											key={btn.id} className={styles.formInfoLink} to={btn.to}
										>
											<Button colorScheme="linkedin"
													w="100%"
													p={6} fontSize="18px"
											>
												{btn.label}
											</Button>
										</Link>

									))
								}
							</Box>
						</Box>
					</Box>

					<Box>
						<Text>
							После регистрации, в Личном кабинете вам будут доступны тесты Образовательных программ, тесты по предметам ЕНТ
						</Text>
					</Box>
				</Box>
			</Box>
		</Layout>
	)
}


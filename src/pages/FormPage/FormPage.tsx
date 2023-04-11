import React from 'react'
import styles from './FormPage.module.sass'
import {Layout} from 'layout/Layout'
import {ContactForm} from 'features'
import {Box, Button, Heading, Text} from '@chakra-ui/react'
import {buttons} from 'pages/FormPage/buttons'
import {Link} from 'react-router-dom'

export const FormPage = () => {
	return (
		<Layout>
			<Box className={styles.form}>
				<Box className={styles.formRow}>
					<Box className={styles.formTop}>
						<Heading className={styles.formTitle} as="h1" fontFamily="Open Sans" fontStyle="italic">
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

							<Box className={styles.formInfoList}>
								{
									buttons.map(btn => (
										<Link className={styles.formInfoLink} to={btn.to}>
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
				</Box>
			</Box>
		</Layout>
	)
}


import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';



const CourseDetail = () => {
    const data = useLoaderData()
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        image: {
            width: "20%",
            padding: 10
        },
        text: {
            fontSize: '12px',
            margin: '10px',
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });

    const MyDoc = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Image style={styles.image} src={image_url}></Image>
                    <Text>{title}</Text>
                    <Text  >{details}</Text>
                    <Text>Price:${price}</Text>

                </View>

            </Page>
        </Document>
    );
    const { title, _id, image_url, price, details, } = data;
    const handleDb = () => {
        const courseId = _id;
        localStorage.setItem('selectedCourse', JSON.stringify(courseId))
    }
    return (
        <div className='flex bg-white pb-36 dark:bg-slate-900 text-slate-900 dark:text-white  justify-center p-5 md:p-20'>
            <div className='flex p-2 mb-10  items-center rounded-lg drop-shadow-xl shadow-xl border borderg-teal-400  flex-col text-center justify-around md:flex-row'>
                <div className='flex  justify-center'>
                    <img className='w-72 mx-2 ' src={image_url} alt="" />
                </div>
                <div className='px-5 my-4 text-start md:text-center'>
                    <div className='flex mb-2 p-2 rounded-lg  bg-teal-200 justify-between'>
                        <h1 className="text-3xl text-slate-800 font-semibold">{title}</h1>

                        <PDFDownloadLink document={<MyDoc />} fileName="detail.pdf">

                            <button type="button" className="font-semibold py-1 px-2 rounded-md bg-teal-600 text-gray-100">DownLoad PDF</button>
                        </PDFDownloadLink>
                    </div>
                    <p className='md:w-96 text-start w-80 text-gray-400'>{details}</p>
                    <div className="flex flex-col md:my-0 my-4  items-center md:flex-row mt-2 justify-between">
                        <p className='font-semibold'>Price: ${price}</p>
                        <Link to='/checkout'>
                            <button onClick={handleDb} type="button" className="font-semibold py-2 px-4 my-4 rounded-md bg-teal-600 text-gray-100">Get Primium Access</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
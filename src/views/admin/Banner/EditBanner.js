// reactstrap components
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
    Input,
    Card,
    CardHeader,
    CardBody,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Container,
    Row,
    FormGroup,
    Form,
    Col,
    Button
}
    from "reactstrap";

import { BannerType } from "~/common/bannerTypeEnum";
import * as bannerService from '~/services/bannerService'

function EditBanner({ banner = {} }) {
    banner = {
        title: 'banner 1',
        type: 1,
        link: 'link',
        photo: {
            id: "d9872e82-ef02-4ae0-84f1-863e49f1de7c",
            path: "https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-1.jpg",
        },
    }
    const getBannerById = async () => {
        const pathname=window.location.pathname
        let bannerId=0
        if (pathname.includes('/admin/banner/edit')) {
            bannerId=+pathname.split('/').at(-1)
        }
        const res = await bannerService.getBannerById(bannerId)
        console.log(res);
    }
    

    const [typeBanner, setTypeBanner] = useState(BannerType.All)
    const [previewPicture, setPreviewPicture] = useState('')

    const keyBanner = Object.keys(BannerType)
    const inputFile = useRef()

    const handleFilterBanner = (type) => {
        setTypeBanner(+type)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log();
    }
    const inputPictureOnchange = (e) => {
        console.log(Boolean(e.target.files.length));
    }
    const handleUpload = () => {
        inputFile.current.click()
    }
    

    useEffect(() => {
        getBannerById()
    }, [])

    return (
        <Container className="mt--7" fluid>
            <Row>
                <div className="col">
                    <Card className="shadow">
                        <CardHeader className="border-0 d-flex align-items-center justify-content-between">
                            <h3 className="mb-0">Create Banner</h3>
                        </CardHeader>
                        <CardBody className="pt-0 pt-md-4">
                            <Form onSubmit={e => handleSubmit(e)}>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <label
                                                className="form-control-label"
                                            >
                                                Title
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                placeholder="Banner 1"
                                                type="text"
                                                defaultValue={banner.title}
                                                name="title"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <label
                                                className="form-control-label"

                                            >
                                                Target url
                                            </label>
                                            <Input
                                                className="form-control-alternative"
                                                placeholder="https://demos.creative-tim.com"
                                                type="text"
                                                defaultValue={banner.link}
                                                name="link"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <UncontrolledDropdown className="">
                                                <DropdownToggle
                                                    caret
                                                    color="primary"
                                                    className="mr-3"

                                                >
                                                    {keyBanner[banner.type]}
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    {keyBanner.map((item, index) => (
                                                        <DropdownItem key={index} onClick={() => handleFilterBanner(BannerType[item])}>
                                                            {item}
                                                        </DropdownItem>
                                                    ))}
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </FormGroup>
                                    </Col>
                                    <Col className="">
                                        <input ref={inputFile} onChange={inputPictureOnchange} type="file" accept=".jpg,.jpeg,.png" name="picture" hidden />
                                        <FormGroup >
                                            <label
                                                className="form-control-label"
                                            >
                                                Picture
                                            </label>
                                            <img

                                                alt="..."
                                                className="rounded shadow"
                                                width='100%'
                                                height='400px'
                                                src={banner.photo.path}
                                                onClick={handleUpload}
                                                style={{ cursor: 'pointer' }}
                                            ></img>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <div className="d-flex">
                                    <Button className="btn btn-icon btn-success" type="submit" style={{ minWidth: '100px' }}>
                                        <span className="btn-inner--text">Save</span>
                                    </Button>
                                    <Link to='/admin/create' className=" btn btn-icon btn-danger" type="button" style={{ minWidth: '100px' }}>
                                        <span className="btn-inner--text">Cancel</span>
                                    </Link>
                                </div>
                            </Form>

                        </CardBody>
                    </Card>
                </div>
            </Row>
        </Container>
    );
}

export default EditBanner;
import React from 'react'
import { GrMysql } from "react-icons/gr";

const Backend = () => {
    return (

        <div className="skills_content">
            <h3 className="skills_title">Backend Developer</h3>


            <div className="skills_box">
                <div className="skills_group">

                    <div className="skills_data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills_name"><i class='bx bxl-java' ></i></h3>
                            <h3 className="skills_name">Java</h3>
                            <span className="skills_level">Core Java</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills_name"><i class='bx bxl-spring-boot' ></i></h3>
                            <h3 className="skills_name">Spring Boot</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills_name"><GrMysql/></h3>
                            <h3 className="skills_name">MySql</h3>
                            <span className="skills_level">Pro</span>
                        </div>
                    </div>





                </div>


                {/* <div className="skills_group">

                    <div className="skills_data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills_name">PHP</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills_name">Python</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>



                    <div className="skills_data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills_name">Hibernate</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>




                </div> */}
            </div>
        </div>
    )
}

export default Backend
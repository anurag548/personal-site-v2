"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { useSectionInView } from '@lib/hooks';
import { experiencesData } from '@lib/data';
import 'react-vertical-timeline-component/style.min.css';


export default function Experience() {
    const {ref} = useSectionInView('Experience');

  return (
    <section id='experience' ref={ref}>
        <SectionHeading>Experience</SectionHeading>
        <VerticalTimeline lineColor="">
            {
                experiencesData.map((experience, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement 
                            visible={true}
                            date={experience.date}
                            // icon={experience.}
                            iconStyle={{
                              background:
                                "rgba(255, 255, 255, 0.15)",
                              fontSize: "1.5rem",
                            }}
                            contentStyle={{
                                background:
                                  "white",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                              }}
                              contentArrowStyle={{
                                borderRight:
                                   "0.4rem solid #9ca3af"
                                  ,
                              }}
                        >
                        <h3 className="font-semibold capitalize">{experience.title}</h3>
                        <p className="font-normal !mt-0">{experience.location}</p>
                        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{experience.description}</p>
                    </VerticalTimelineElement>
                    </React.Fragment>
                    
                ))
            }
        </VerticalTimeline>
    </section>
  )
}

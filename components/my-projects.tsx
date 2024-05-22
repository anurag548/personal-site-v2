"use client";
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@lib/data'
import ProjectTile from './project-tile'
import { useSectionInView } from '@lib/hooks';

export default function MyProjects() {
  const {ref} = useSectionInView("Projects", 0.5)
  return (
    <div id='projects' ref={ref}>
        <SectionHeading>My Projects</SectionHeading>
        <div>
            {
                projectsData.map((project, index) => (
                    <React.Fragment key={index}>
            <ProjectTile {...project} />
          </React.Fragment>
                ))
            }
        </div>
    </div>
  )
}

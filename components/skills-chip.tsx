import { skillsData } from '@lib/data'
import React from 'react'
import Image from 'next/image'

type SkillsChipProps = (typeof skillsData)[number]

export default function SkillsChip({
    name,
    icon
    }: SkillsChipProps) {
    return (
        <div className='bg-white border-[0.2px] border-gray-200 flex rounded-xl px-4 py-1.5 dark:bg-white/10 dark:text-white/80'>
        {name}
        </div>
    )
}

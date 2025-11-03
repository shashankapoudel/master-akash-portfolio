import React from 'react'

const AdvSoundHealingCourse = () => {


    const courseDetails = [
        { detail: "Course Name", description: "Advanced Sound Healing Certified Course" },
        { detail: "Prerequisite", description: "Must successfully finish our Basic Level 1-3 Sound Healing Certified Course." },
        { detail: "Provider", description: "Basic Sound Healing Certified Course (Levels 1-3)" },
        {
            detail: "Duration", description: "3 Days (24 hours of intensive training)."
        },
        {
            detail: "Goal", description: "To deepen your knowledge of sound healing, master advanced treatment methods, learn to play other healing instruments (Gong, Shanka), and become a professional sound healer capable of changing lives."
        },
        {
            detail: "Instructor", description: "Led by the experienced Nepal Singing Bowl Healing Master, Akash Banjara."
        },
        {
            detail: "Bonus", description: "Complimentary handmade mini master chakra set (7 metal, 16-23cm) upon successful enrollment."
        },
        {
            detail: "What it is", description: "A 3-day intensive course focused on deepening therapeutic knowledge, mastering multi-instrument healing (Gong, Shanka), and learning specialized clinical protocols developed from Himalayan Yogic Science. The aim is to equip you to become a professional sound healer capable of solving complex physical and energetic problems. "
        },
    ]

    return (
        <div className='w-full flex items-center justify-center p-8'>

            <div className='text-[#11111] w-1/2'>

                <strong className='text-center'>Advanced Sound Healing Certified Course</strong>

                <p>As our Basic Teacher Training provided you with the basic map of the body, mind, and chakras, the Advanced Sound Healing Certified Course is an elaborate venture into that land. You will not only be balancing, but you will be on a wide-ranging, profound investigation into the dynamics of complex energy. This stage is also concerned with the diagnosis of deep-seated imbalances, the use of special therapy plans, and the skill to use powerful tools to address difficult issues. This is where you will convert what you have learned into the skills of a professional, clinical-level healer.</p>
                <br />

                <div>
                    <table className='min-w-full'>
                        <thead className=' text-gray-800'>
                            <tr>
                                <th className='border border-gray-400 text-left w-12 px-4 py-2'>Detail</th>
                                <th className='border border-gray-400 text-left w-24 px-4 py-2'>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                courseDetails.map((item) => (
                                    <tr key={item.detail}>
                                        <td className='border border-gray-400 text-gray px-4 py-2 font-medium'>{item.detail}</td>
                                        <td className='border border-gray-400 text-gray px-4 py-2 font-medium'>{item.description}</td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                </div>

                <br />

                <strong>Key Benefits: :</strong><br />

                Deepen your knowledge of sound healing, advancing your skills beyond the Basic level to resolve complex energetic and physical issues.
                <br />
                2.Master exclusive, specialized protocols for targeted conditions, including Pain Relief, Mind Focus Therapy, Therapy for Pregnant Women, and the Special Cancer Therapy protocols innovated by Master Banjara.<br />
                3. Learn advanced playing methods and therapeutic application for instruments beyond singing bowls, focusing on the Gong and Shanka (Conch Shell) for full sonic immersion and purification.<br />
                4. Acquire skills in the detection and purification of negative energy and advanced Energy Balancing Therapy to precisely address root causes of imbalance. <br />
                5. Earn a Nepal-accredited professional certificate for the Advanced Level, and apply for the Yoga Alliance YACEP certificate..<br />
                <br />

                <strong>Why choose our Advanced sound healing teacher training?
                </strong><br />
                <br />
                <strong>1. Exclusive Clinical Lineage: </strong>Course founders and instructors bring direct experience from a renowned Himalayan Yogic Guru lineage and extensive clinical research, giving you access to innovative and proven sound protocols for chronic disease.<br />

                <strong>2. Deep Yogic Integration:</strong> The curriculum extensively explores the daily connections and relationships between sound practice and Yogic Science, providing a deeper, holistic framework for self-healing and client work. <br />

                <strong>3. Focus on Professionalism:</strong> The course includes dedicated modules on how to be a Professional Sound Healer and improving healing skills, preparing you for a successful, high-level practice.<br />

                <strong>4. Ready-to-Use Complex Flows: </strong>You’ll learn complete, ready-to-implement flows for specialized sessions like Gong Baths, Energy Balancing, and Preventive Healing, ensuring you can run advanced client sessions immediately.

                <br />
                <br />

                <strong>What You’ll Learn: Advanced Modules:</strong>
                <ul>
                    <li> <strong>1. Yogic Connection & Revision: </strong> Yog & Singing Bowls; Advanced Meditation; Revision of Basic Level; How to Improve Our Healing Skills; The Sound Secret.
                    </li>

                    <li><strong>2. Multi-Instrument Mastery: </strong>
                        Playing Methods of Various Instruments, with deep focus on Gong Playing and Practices and the therapeutic use of Shanka.
                    </li>

                    <li> <strong>3. Advanced Self & Client Care: </strong> Self-healing and Energy Boosting Methods for the practitioner.</li>

                    <li><strong>4. Energy Diagnostics & Clearing:</strong> Energy Balancing Therapy and detailed techniques for the Detection and Purification of Negative Energy..
                    </li>

                    <li> <strong>5. Integrated Tools:</strong> Introduction of Crystal & Usage alongside sound for enhanced therapeutic effect.
                    </li>

                    <li> <strong>6. Practice & Sequencing:</strong> Professional Sound Bath Practice and Discussion & Review of client cases.</li>

                    <li><strong>7.Targeted Therapeutic Modules (Clinical Focus): </strong>Therapy for Pregnant Women (safe and specialized protocols),Preventive Healing Method,Pain Relief Method, Mind Focus Therapy, Special Cancer Therapy.
                    </li>
                </ul>
                <br />

                <strong>What to expect during training?</strong>
                <br />
                <strong>1. Intensive Hands-on Practice:</strong>  Significant time dedicated to practicing specialized therapy flows and mastering the Gong and Shanka.
                <br />

                <strong>2.Expert Guidance: </strong> Direct mentorship from Master Akash Banjara, who shares insights from years of clinical experience and innovation.
                <br />

                <strong>3. Real-World Preparation:</strong> Dedicated training on the ethics, mindset, and practical steps needed to establish and maintain your career as a professional sound healer.
                <br />

                <strong>4. Collaborative Learning:</strong> Review and discussion sessions to deepen understanding and refine technique amongst peers.
                <br />
                <br />


                <strong>Who should attend?</strong>
                <br />
                1. Participants who have completed the Basic Level 1-3 Sound Healing Certified Course and are ready to advance their skills.
                <br />

                2. Those committed to developing a full-time professional practice and serving clients with complex or specialized needs.
                <br />

                3.  Practitioners (Yoga Teachers, Therapists) looking to integrate research-based, advanced techniques for pain, emotional release, and energetic diagnosis.

                <br />
                <br />

                <strong>Practical details & what to bring:</strong><br />

                <strong>Duration & Time:</strong> 3 Days, 10:00 - 19:00 daily (24 total hours).<br />
                <strong>Instruments Provided:</strong> All instruments, including singing bowls, gongs, and shanka, are provided for practice in class.<br />
                <strong>Post-Graduation Perks: </strong>Graduated students can enjoy free space rental and bowls for practice at our center, and can trade the complimentary Master Set for a discount on other instrument purchases.
                <br />
                <br />

                <strong>Meet Your Instructor: Master Akash Banjara</strong><br />
                The course is frequently led by Healing Master Akash Banjara, a master with an experienced lineage born from a Nepalese musical family. Master Banjara is trained in meditation, Sanskrit, and various energy practices, including mentorship under a famous Himalayan Yogic Guru. His expertise includes years of research and clinical experience, leading to the innovation of special treatments for complex conditions and preventative healing. <br />



            </div>

        </div>
    )
}

export default AdvSoundHealingCourse

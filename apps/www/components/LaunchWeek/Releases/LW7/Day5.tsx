import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useMobileViewport } from '~/hooks/useMobileViewport'
import { CartTitle, MultistepSectionHeader, SectionButtons, StyledArticleBadge } from './components'

import { WeekDayProps } from '~/components/LaunchWeek/lw7_days'
import { opacityVariant4, scaleOpacityVariant, scaleOpacityVariant2 } from './LW7Releases'

import styles from './day5.module.css'

const getDay5Motion = (index: number) => {
  switch (index) {
    case 0:
      return scaleOpacityVariant2
    default:
      return undefined
  }
}

const getDay5Community02Motion = (index: number) => {
  switch (index) {
    case 0:
      return opacityVariant4
    case 1:
      return scaleOpacityVariant
    default:
      return undefined
  }
}

const Day5 = ({ day }: { day: WeekDayProps }) => {
  const isMobile = useMobileViewport(767)
  const isTablet = useMobileViewport(1023)

  return (
    <>
      {/* Community */}
      <div className="h-auto flex flex-col gap-5 lg:flex-row">
        <motion.div
          className={`
                      relative overflow-hidden flex-1 flex flex-col items-center gap-5 lg:items-start justify-between
                      basis-1/2 lg:flex-shrink xl:basis-2/3 w-full border rounded-xl px-4 sm:px-8 lg:px-14 py-10 xs:text-2xl text-xl sm:text-2xl md:text-xl text-center shadow-lg
                      min-h-[400px]
                    `}
          initial="default"
          animate="default"
          whileHover="hover"
        >
          <div className="flex items-center text-center lg:text-left justify-between flex-col lg:flex-row lg:justify-start gap-3 text-white">
            <CartTitle>{day.steps[0].steps[0].title}</CartTitle>
            <StyledArticleBadge className="lg:ml-2">New</StyledArticleBadge>
          </div>
          <SectionButtons blog={day.steps[0].steps[0].blog} />
          {day.steps[0]?.steps[0]?.bg_layers &&
            day.steps[0].steps[0].bg_layers?.map(
              (layer, i) =>
                !!layer.img && (
                  <motion.div
                    className={['absolute inset-0 w-full h-full -z-10'].join(' ')}
                    variants={getDay5Motion(i)}
                  >
                    <Image
                      src={!!layer.mobileImg && isTablet ? (layer.mobileImg as any) : layer.img}
                      className={[`absolute w-full h-full -z-10 transition-all duration-300`].join(
                        ' '
                      )}
                      layout="fill"
                      objectPosition={!!layer.mobileImg && isTablet ? '50% 50%' : '50% 50%'}
                      objectFit="cover"
                      quality={100}
                    />
                  </motion.div>
                )
            )}
        </motion.div>
        <motion.div
          className={`
                      relative overflow-hidden flex-1 flex flex-col items-center gap-5 lg:items-start justify-between
                      basis-1/2 lg:basis-1/3 w-full border rounded-xl px-4 sm:px-8 lg:px-14 py-10 xs:text-2xl text-xl sm:text-2xl md:text-xl text-center shadow-lg
                      min-h-[400px]
                    `}
          initial="default"
          animate="default"
          whileHover="hover"
        >
          <div className="flex items-center text-center lg:text-left justify-between flex-col lg:flex-row lg:justify-start gap-3 text-white">
            <CartTitle>{day.steps[0].steps[1].title}</CartTitle>
            <StyledArticleBadge className="lg:ml-2">New</StyledArticleBadge>
          </div>
          <SectionButtons blog={day.steps[0].steps[1].blog} />
          {day.steps[0]?.steps[1]?.bg_layers &&
            day.steps[0].steps[1].bg_layers?.map(
              (layer, i) =>
                !!layer.img && (
                  <motion.div
                    className={['absolute inset-0 w-full h-full -z-10'].join(' ')}
                    variants={getDay5Community02Motion(i)}
                  >
                    <Image
                      src={!!layer.mobileImg && isTablet ? (layer.mobileImg as any) : layer.img}
                      className={[`absolute w-full h-full -z-10 transition-all duration-300`].join(
                        ' '
                      )}
                      layout="fill"
                      objectPosition={!!layer.mobileImg && isTablet ? '50% 50%' : '50% 50%'}
                      objectFit={i === 1 && isTablet ? 'contain' : 'cover'}
                      quality={100}
                    />
                  </motion.div>
                )
            )}
        </motion.div>
      </div>
      {/* Studio */}
      <MultistepSectionHeader title={day.steps[1].title} blog={day.steps[1].blog} />
      <div
        className={[
          'h-auto flex flex-col sm:grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5 lg:flex-row',
          styles['day5-grid'],
        ].join(' ')}
      >
        <motion.div
          className={`
                      relative overflow-hidden flex-1 flex flex-col items-center gap-5 md:items-start justify-between
                      col-span-full grid-ro w-full border rounded-xl px-4 sm:px-8 lg:px-14 py-10 text-xl sm:text-2xl md:text-xl text-center shadow-lg
                      min-h-[350px] md:min-h-[220px] 
                    `}
          initial="default"
          animate="default"
          whileHover="hover"
          style={{ gridArea: 'commandK' }}
        >
          <div className="flex items-center text-center md:text-left justify-between flex-col md:flex-row lg:justify-start gap-3 text-white">
            <CartTitle>{day.steps[1].steps[0].title}</CartTitle>
            <StyledArticleBadge className="lg:ml-2">
              {day.steps[1].steps[0].badge}
            </StyledArticleBadge>
          </div>
          {day.steps[1].steps[0].bg_layers &&
            day.steps[1].steps[0].bg_layers?.map(
              (layer, i) =>
                !!layer.img && (
                  <motion.div
                    className={['absolute inset-0 w-full h-full -z-10'].join(' ')}
                    variants={getDay5Motion(i)}
                  >
                    <Image
                      src={!!layer.mobileImg && isMobile ? (layer.mobileImg as any) : layer.img}
                      className={[`absolute w-full h-full -z-10 transition-all duration-300`].join(
                        ' '
                      )}
                      layout="fill"
                      objectPosition={!!layer.mobileImg && isMobile ? '50% 50%' : '80% 50%'}
                      objectFit="cover"
                      quality={100}
                    />
                  </motion.div>
                )
            )}
        </motion.div>
        <motion.div
          className={`
                      relative overflow-hidden flex-1 flex flex-col items-center gap-5 md:items-start justify-between text-xl sm:text-2xl md:text-xl shadow-lg
                      w-full border rounded-xl px-4 sm:px-8 lg:px-14 py-10 text-center 
                      min-h-[350px] md:min-h-[220px] 
                    `}
          initial="default"
          animate="default"
          whileHover="hover"
          style={{ gridArea: 'wrappers' }}
        >
          <div className="flex items-center text-center md:text-left justify-between flex-col md:items-start gap-3 text-white">
            <CartTitle>{day.steps[1].steps[1].title}</CartTitle>
            <StyledArticleBadge>{day.steps[1].steps[1].badge}</StyledArticleBadge>
          </div>
          {day.steps[1].steps[1].bg_layers &&
            day.steps[1].steps[1].bg_layers?.map(
              (layer, i) =>
                !!layer.img && (
                  <motion.div
                    className={['absolute inset-0 w-full h-full -z-10'].join(' ')}
                    variants={getDay5Motion(i)}
                  >
                    <Image
                      src={!!layer.mobileImg && isMobile ? (layer.mobileImg as any) : layer.img}
                      className={[`absolute w-full h-full -z-10 transition-all duration-300`].join(
                        ' '
                      )}
                      layout="fill"
                      objectPosition={!!layer.mobileImg && isMobile ? '50% 50%' : '80% 50%'}
                      objectFit="cover"
                      quality={100}
                    />
                  </motion.div>
                )
            )}
        </motion.div>
        <motion.div
          className={`
                      relative overflow-hidden flex-1 flex flex-col items-center gap-5 justify-between text-xl sm:text-2xl md:text-xl shadow-lg
                      w-full border rounded-xl px-4 py-10 text-center 
                      min-h-[350px] md:min-h-[220px]
                    `}
          initial="default"
          animate="default"
          whileHover="hover"
          style={{ gridArea: 'nullable' }}
        >
          <div className="flex flex-col items-center text-center gap-3 text-white">
            <CartTitle>{day.steps[1].steps[2].title}</CartTitle>
            <StyledArticleBadge className="lg:ml-2">
              {day.steps[1].steps[2].badge}
            </StyledArticleBadge>
          </div>
          {day.steps[1].steps[2].bg_layers &&
            day.steps[1].steps[2].bg_layers?.map(
              (layer, i) =>
                !!layer.img && (
                  <motion.div
                    className={['absolute inset-0 w-full h-full -z-10'].join(' ')}
                    variants={getDay5Motion(i)}
                  >
                    <Image
                      src={!!layer.mobileImg && isTablet ? (layer.mobileImg as any) : layer.img}
                      className={[`absolute w-full h-full -z-10 transition-all duration-300`].join(
                        ' '
                      )}
                      layout="fill"
                      objectPosition={!!layer.mobileImg && isTablet ? '50% 50%' : '50% 50%'}
                      objectFit="cover"
                      quality={100}
                    />
                  </motion.div>
                )
            )}
        </motion.div>
        <motion.div
          className={`
                      relative overflow-hidden flex-1 flex flex-col items-center gap-5 justify-between text-xl sm:text-2xl md:text-xl shadow-lg
                      w-full border rounded-xl px-4 sm:px-8 py-10 text-center 
                      min-h-[350px] md:min-h-[220px]
                    `}
          initial="default"
          animate="default"
          whileHover="hover"
          style={{ gridArea: 'apiAutodocs' }}
        >
          <div className="flex items-center text-center flex-col gap-3 text-white">
            <CartTitle>{day.steps[1].steps[3].title}</CartTitle>
            <StyledArticleBadge className="lg:ml-2">
              {day.steps[1].steps[3].badge}
            </StyledArticleBadge>
          </div>
          {day.steps[1].steps[3].bg_layers &&
            day.steps[1].steps[3].bg_layers?.map(
              (layer, i) =>
                !!layer.img && (
                  <motion.div
                    className={['absolute inset-0 w-full h-full -z-10'].join(' ')}
                    variants={getDay5Motion(i)}
                  >
                    <Image
                      src={!!layer.mobileImg && isTablet ? (layer.mobileImg as any) : layer.img}
                      className={[`absolute w-full h-full -z-10 transition-all duration-300`].join(
                        ' '
                      )}
                      layout="fill"
                      objectPosition={!!layer.mobileImg && isTablet ? '50% 50%' : '50% 50%'}
                      objectFit="cover"
                      quality={100}
                    />
                  </motion.div>
                )
            )}
        </motion.div>
        <motion.div
          className={`
                      relative overflow-hidden flex-1 flex flex-col items-center gap-5 lg:items-start justify-between text-xl sm:text-2xl md:text-xl shadow-lg
                      w-full border rounded-xl px-4 sm:px-8 lg:px-14 py-10 text-center
                      h-auto min-h-[400px] md:min-h-[600px] xl:min-h-full
                    `}
          initial="default"
          animate="default"
          whileHover="hover"
          style={{ gridArea: 'pgRoles' }}
        >
          <div className="flex items-center text-center lg:text-left justify-between flex-col lg:flex-row lg:justify-start gap-3 text-white">
            <CartTitle>{day.steps[1].steps[4].title}</CartTitle>
            <StyledArticleBadge className="lg:ml-2">
              {day.steps[1].steps[4].badge}
            </StyledArticleBadge>
          </div>
          {day.steps[1].steps[4].bg_layers &&
            day.steps[1].steps[4].bg_layers?.map(
              (layer, i) =>
                !!layer.img && (
                  <motion.div
                    className={['absolute inset-0 w-full h-full -z-10'].join(' ')}
                    variants={getDay5Motion(i)}
                  >
                    <Image
                      src={!!layer.mobileImg && isTablet ? (layer.mobileImg as any) : layer.img}
                      className={[`absolute w-full h-full -z-10 transition-all duration-300`].join(
                        ' '
                      )}
                      layout="fill"
                      objectPosition={!!layer.mobileImg && isTablet ? '50% 50%' : '50% 50%'}
                      objectFit="cover"
                      quality={100}
                    />
                  </motion.div>
                )
            )}
        </motion.div>
        <motion.div
          className={`
                      relative overflow-hidden flex-1 flex flex-col items-center gap-5 lg:items-start justify-between text-xl sm:text-2xl md:text-xl shadow-lg
                      w-full border rounded-xl px-4 sm:px-8 lg:px-14 py-10 text-center
                      h-auto min-h-[400px] md:min-h-[600px] xl:min-h-full
                    `}
          initial="default"
          animate="default"
          whileHover="hover"
          style={{ gridArea: 'casDeletes' }}
        >
          <div className="flex items-center text-center lg:text-left justify-between flex-col lg:flex-row lg:justify-start gap-3 text-white">
            <CartTitle>{day.steps[1].steps[5].title}</CartTitle>
            <StyledArticleBadge className="lg:ml-2">
              {day.steps[1].steps[5].badge}
            </StyledArticleBadge>
          </div>
          {day.steps[1].steps[5].bg_layers &&
            day.steps[1].steps[5].bg_layers?.map(
              (layer, i) =>
                !!layer.img && (
                  <motion.div
                    className={['absolute inset-0 w-full h-full -z-10'].join(' ')}
                    variants={getDay5Motion(i)}
                  >
                    <Image
                      src={!!layer.mobileImg && isTablet ? (layer.mobileImg as any) : layer.img}
                      className={[`absolute w-full h-full -z-10 transition-all duration-300`].join(
                        ' '
                      )}
                      layout="fill"
                      objectPosition={!!layer.mobileImg && isTablet ? '50% 50%' : '50% 50%'}
                      objectFit="cover"
                      quality={100}
                    />
                  </motion.div>
                )
            )}
        </motion.div>
        <motion.div
          className={`
                      relative overflow-hidden flex-1 flex flex-col items-center gap-5 lg:items-start justify-between text-xl sm:text-2xl md:text-xl shadow-lg
                      w-full border rounded-xl px-4 sm:px-8 lg:px-14 py-10 text-center 
                      min-h-[350px] md:min-h-[220px] 
                    `}
          initial="default"
          animate="default"
          whileHover="hover"
          style={{ gridArea: 'graphiQL' }}
        >
          <div className="flex items-center text-center lg:text-left justify-between flex-col lg:flex-row lg:justify-start gap-3 text-white">
            <CartTitle>{day.steps[1].steps[6].title}</CartTitle>
            <StyledArticleBadge className="lg:ml-2">
              {day.steps[1].steps[6].badge}
            </StyledArticleBadge>
          </div>
          {day.steps[1].steps[6].bg_layers &&
            day.steps[1].steps[6].bg_layers?.map(
              (layer, i) =>
                !!layer.img && (
                  <motion.div
                    className={['absolute inset-0 w-full h-full -z-10'].join(' ')}
                    variants={getDay5Motion(i)}
                  >
                    <Image
                      src={!!layer.mobileImg && isTablet ? (layer.mobileImg as any) : layer.img}
                      className={[`absolute w-full h-full -z-10 transition-all duration-300`].join(
                        ' '
                      )}
                      layout="fill"
                      objectPosition={!!layer.mobileImg && isTablet ? '50% 50%' : '50% 50%'}
                      objectFit="cover"
                      quality={100}
                    />
                  </motion.div>
                )
            )}
        </motion.div>
        <motion.div
          className={`
                      relative overflow-hidden flex-1 flex flex-col items-center gap-5 lg:items-start justify-between text-xl sm:text-2xl md:text-xl shadow-lg
                      w-full border rounded-xl px-4 sm:px-8 lg:px-14 py-10 text-center 
                      min-h-[350px] md:min-h-[220px] 
                    `}
          initial="default"
          animate="default"
          whileHover="hover"
          style={{ gridArea: 'dbWebhooks' }}
        >
          <div className="flex items-center text-center lg:text-left justify-between flex-col lg:flex-row lg:justify-start gap-3 text-white">
            <CartTitle>{day.steps[1].steps[7].title}</CartTitle>
            <StyledArticleBadge className="lg:ml-2">
              {day.steps[1].steps[7].badge}
            </StyledArticleBadge>
          </div>
          {day.steps[1].steps[7].bg_layers &&
            day.steps[1].steps[7].bg_layers?.map(
              (layer, i) =>
                !!layer.img && (
                  <motion.div
                    className={['absolute inset-0 w-full h-full -z-10'].join(' ')}
                    variants={getDay5Motion(i)}
                  >
                    <Image
                      src={!!layer.mobileImg && isTablet ? (layer.mobileImg as any) : layer.img}
                      className={[`absolute w-full h-full -z-10 transition-all duration-300`].join(
                        ' '
                      )}
                      layout="fill"
                      objectPosition={!!layer.mobileImg && isTablet ? '50% 50%' : '50% 50%'}
                      objectFit="cover"
                      quality={100}
                    />
                  </motion.div>
                )
            )}
        </motion.div>
        <motion.div
          className={`
                      relative overflow-hidden flex-1 flex flex-col items-center gap-5 justify-between text-xl sm:text-2xl md:text-xl shadow-lg
                      w-full border rounded-xl px-4 sm:px-8 lg:px-14 py-10 text-center 
                      min-h-[350px] md:min-h-[220px] 
                    `}
          initial="default"
          animate="default"
          whileHover="hover"
          style={{ gridArea: 'viewsTables' }}
        >
          <div className="flex items-center text-center flex-col gap-3 text-white">
            <CartTitle>{day.steps[1].steps[8].title}</CartTitle>
            <StyledArticleBadge className="lg:ml-2">
              {day.steps[1].steps[8].badge}
            </StyledArticleBadge>
          </div>
          {day.steps[1].steps[8].bg_layers &&
            day.steps[1].steps[8].bg_layers?.map(
              (layer, i) =>
                !!layer.img && (
                  <motion.div
                    className={['absolute inset-0 w-full h-full -z-10'].join(' ')}
                    variants={getDay5Motion(i)}
                  >
                    <Image
                      src={!!layer.mobileImg && isTablet ? (layer.mobileImg as any) : layer.img}
                      className={[`absolute w-full h-full -z-10 transition-all duration-300`].join(
                        ' '
                      )}
                      layout="fill"
                      objectPosition={!!layer.mobileImg && isTablet ? '50% 50%' : '50% 50%'}
                      objectFit="cover"
                      quality={100}
                    />
                  </motion.div>
                )
            )}
        </motion.div>
        <motion.div
          className={`
                      relative overflow-hidden flex-1 flex flex-col items-center gap-5 justify-between text-xl sm:text-2xl md:text-xl shadow-lg
                      w-full border rounded-xl px-4 sm:px-8 py-10 text-center 
                      min-h-[350px] md:min-h-[220px]
                    `}
          initial="default"
          animate="default"
          whileHover="hover"
          style={{ gridArea: 'JSONsupport' }}
        >
          <div className="flex items-center text-center flex-col gap-3 text-white">
            <CartTitle>{day.steps[1].steps[9].title}</CartTitle>
            <StyledArticleBadge className="lg:ml-2">
              {day.steps[1].steps[9].badge}
            </StyledArticleBadge>
          </div>
          {day.steps[1].steps[9].bg_layers &&
            day.steps[1].steps[9].bg_layers?.map(
              (layer, i) =>
                !!layer.img && (
                  <motion.div
                    className={['absolute inset-0 w-full h-full -z-10'].join(' ')}
                    variants={getDay5Motion(i)}
                  >
                    <Image
                      src={!!layer.mobileImg && isTablet ? (layer.mobileImg as any) : layer.img}
                      className={[`absolute w-full h-full -z-10 transition-all duration-300`].join(
                        ' '
                      )}
                      layout="fill"
                      objectPosition={!!layer.mobileImg && isTablet ? '50% 50%' : '50% 50%'}
                      objectFit="cover"
                      quality={100}
                    />
                  </motion.div>
                )
            )}
        </motion.div>
        <motion.div
          className={`
                      relative overflow-hidden flex-1 flex flex-col items-center gap-5 lg:items-start justify-between text-xl sm:text-2xl md:text-xl shadow-lg
                      w-full border rounded-xl px-4 sm:px-8 lg:px-14 py-10 text-center 
                      min-h-[350px] md:min-h-[220px] 
                    `}
          initial="default"
          animate="default"
          whileHover="hover"
          style={{ gridArea: 'insights' }}
        >
          <div className="flex items-center text-center lg:text-left justify-between flex-col lg:flex-row lg:justify-start gap-3 text-white">
            <CartTitle>{day.steps[1].steps[10].title}</CartTitle>
            <StyledArticleBadge className="lg:ml-2">
              {day.steps[1].steps[10].badge}
            </StyledArticleBadge>
          </div>
          {day.steps[1].steps[10].bg_layers &&
            day.steps[1].steps[10].bg_layers?.map(
              (layer, i) =>
                !!layer.img && (
                  <motion.div
                    className={['absolute inset-0 w-full h-full -z-10'].join(' ')}
                    variants={getDay5Motion(i)}
                  >
                    <Image
                      src={!!layer.mobileImg && isTablet ? (layer.mobileImg as any) : layer.img}
                      className={[`absolute w-full h-full -z-10 transition-all duration-300`].join(
                        ' '
                      )}
                      layout="fill"
                      objectPosition={!!layer.mobileImg && isTablet ? '50% 50%' : '50% 50%'}
                      objectFit="cover"
                      quality={100}
                    />
                  </motion.div>
                )
            )}
        </motion.div>
      </div>
    </>
  )
}

export default Day5

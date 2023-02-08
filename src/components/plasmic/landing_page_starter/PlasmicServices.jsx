// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: scFep1yV2m46PC9GmZdAAJ
// Component: a3eSPHl8zvXEv5
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Navbar from "../../Navbar"; // plasmic-import: 24Ns76HZ8CU199/component
import ValueProp from "../../ValueProp"; // plasmic-import: pCj1UpAZoaMeJL/component
import PriceCard from "../../PriceCard"; // plasmic-import: M6FTF8hcCIDSdH/component
import FooterSection from "../../FooterSection"; // plasmic-import: 9zsWfGCN3VHyK7/component
import { useScreenVariants as useScreenVariantslwkYg8Ze9PdYs } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: LwkYG8ZE9pdYs/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: scFep1yV2m46PC9GmZdAAJ/projectcss
import sty from "./PlasmicServices.module.css"; // plasmic-import: a3eSPHl8zvXEv5/css
import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: zkR8jhVePdAqR/icon
import TargetIcon from "./icons/PlasmicIcon__Target"; // plasmic-import: 1jdZnlqU2fWmh/icon
import FastIcon from "./icons/PlasmicIcon__Fast"; // plasmic-import: 8EhjKVrUZTSWw/icon
import StrongIcon from "./icons/PlasmicIcon__Strong"; // plasmic-import: wisQGnmy1HCWa/icon
import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: MbwTi4khdf7cE/icon
import chart6YHwalKgImW4Z from "./images/chart.png"; // plasmic-import: 6yHwalKGImW4Z/picture
import sparkleWyfjri6OKMkc from "./images/sparkle.png"; // plasmic-import: WYFJRI6O_KMkc/picture
import medalLXt8RHyeq9As from "./images/medal.png"; // plasmic-import: LXt_8rHyeq9as/picture
import trophyGsGieozRg5Yeh from "./images/trophy.png"; // plasmic-import: gsGIEOZRg5Yeh/picture

export const PlasmicServices__VariantProps = new Array();

export const PlasmicServices__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicServices__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantslwkYg8Ze9PdYs()
  });
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__xXuZ)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground"}
              data-plasmic-override={overrides.foreground}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ldtAo
                )}
              >
                {"Naše služby"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pmpsb
                )}
              >
                {
                  "A euismod eros a hendrerit tristique suscipit sit aptent dolor adipiscing inceptos cras ullamcorper a vivamus parturient."
                }
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground2"}
              data-plasmic-override={overrides.foreground2}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground2)}
            >
              <ValueProp
                card={true}
                className={classNames("__wab_instance", sty.valueProp___0BoFm)}
                description={
                  "Quis iaculis tempor a condimentum per eu montes quis inceptos mi et dis suspendisse integer dui. Orci ad pharetra a vestibulum parturient mauris ac nisl cursus at a vestibulum morbi conubia suspendisse massa vestibulum a varius."
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__gk4K4)}
                    displayHeight={"56px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"56px"}
                    src={{
                      src: chart6YHwalKgImW4Z,
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"Accomplish more"}
              />

              <ValueProp
                card={true}
                className={classNames("__wab_instance", sty.valueProp__bpFy0)}
                description={
                  "Ut interdum consectetur a interdum parturient blandit vestibulum vel quisque quis lorem libero imperdiet a sed massa quisque rhoncus sed cum quisque morbi."
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__lUyb)}
                    displayHeight={"56px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"56px"}
                    src={{
                      src: sparkleWyfjri6OKMkc,
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"Best-in-class"}
              />

              <ValueProp
                card={true}
                className={classNames("__wab_instance", sty.valueProp__vuikF)}
                description={
                  "Ullamcorper adipiscing adipiscing euismod odio nascetur eu magnis pretium arcu fermentum a eget cubilia tempor. Eu cubilia sodales vestibulum massa non ipsum consectetur lorem nibh parturient parturient vestibulum cum cras penatibus donec dui sit sed eleifend conubia condimentum parturient rutrum."
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__zr7Tr)}
                    displayHeight={"56px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"56px"}
                    src={{
                      src: medalLXt8RHyeq9As,
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"Championship award-winners"}
              />

              <ValueProp
                card={true}
                className={classNames("__wab_instance", sty.valueProp__rpn5C)}
                description={
                  "Est parturient imperdiet proin inceptos parturient dignissim risus auctor cubilia cum iaculis eu feugiat justo eu vel at non nisl laoreet ligula porttitor a nunc ac cum habitant urna."
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__mqd4Y)}
                    displayHeight={"56px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"56px"}
                    src={{
                      src: trophyGsGieozRg5Yeh,
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"Destined for greatness"}
              />
            </p.Stack>
          </p.Stack>

          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground3"}
              data-plasmic-override={overrides.foreground3}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground3)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__ecD2)}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___9DFnr)}
                >
                  <h2
                    data-plasmic-name={"h2"}
                    data-plasmic-override={overrides.h2}
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2
                    )}
                  >
                    {"Next-level"}
                  </h2>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__m0Pmg
                  )}
                >
                  {"Dui urna enim a tempus commodo adipiscing ullamcorper."}
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__fq31R)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"columns"}
                  data-plasmic-override={overrides.columns}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.columns)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column___9QqiI)}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp___2WamU
                      )}
                      darkBackground={true}
                      description={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__mypYn
                          )}
                        >
                          {
                            "Nulla odio mauris enim parturient adipiscing vestibulum inceptos."
                          }
                        </div>
                      }
                      icon={
                        <HammerIcon
                          className={classNames(projectcss.all, sty.svg__qiOcx)}
                          role={"img"}
                        />
                      }
                      title={"Harder"}
                      vertical={true}
                    />
                  </div>

                  <div className={classNames(projectcss.all, sty.column__xp9P)}>
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp__a0NO3
                      )}
                      darkBackground={true}
                      description={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__z4OgH
                          )}
                        >
                          {
                            "Consequat scelerisque a eros taciti nisl a sodales."
                          }
                        </div>
                      }
                      icon={
                        <TargetIcon
                          className={classNames(projectcss.all, sty.svg__covcg)}
                          role={"img"}
                        />
                      }
                      title={"Better"}
                      vertical={true}
                    />
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column__yhyTp)}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp__lbZf
                      )}
                      darkBackground={true}
                      description={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__h0Df4
                          )}
                        >
                          {
                            "Varius ad malesuada ullamcorper cursus scelerisque a a."
                          }
                        </div>
                      }
                      icon={
                        <FastIcon
                          className={classNames(projectcss.all, sty.svg__ntLEw)}
                          role={"img"}
                        />
                      }
                      title={"Faster"}
                      vertical={true}
                    />
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.column__lv87C)}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp___7TEhw
                      )}
                      darkBackground={true}
                      description={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__oaslm
                          )}
                        >
                          {
                            "Ut eu nam nostra taciti congue adipiscing curabitur."
                          }
                        </div>
                      }
                      icon={
                        <StrongIcon
                          className={classNames(projectcss.all, sty.svg__yAFg5)}
                          role={"img"}
                        />
                      }
                      title={"Stronger"}
                      vertical={true}
                    />
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>
          </section>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__y8MaQ)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__gwm5T)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__hwCaA)}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___8YhzV)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___5Ei8X
                    )}
                  >
                    {"Pricing plans"}
                  </div>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___0UP3P
                  )}
                >
                  {
                    "Nascetur nascetur ridiculus scelerisque adipiscing a nascetur varius sed eu a ad semper a est nec litora ante at orci rhoncus a varius auctor aliquam inceptos vestibulum ridiculus."
                  }
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___5AMWh)}
              >
                <PriceCard
                  className={classNames("__wab_instance", sty.priceCard__vj5Zq)}
                  description={
                    <React.Fragment>
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__cIn4Z
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__bvHu
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__y5Tvp
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg___2ZvF
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />
                    </React.Fragment>
                  }
                  dollars={"0"}
                />

                <PriceCard
                  action={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__h7Bq6
                      )}
                    >
                      {"Buy Pro"}
                    </div>
                  }
                  className={classNames("__wab_instance", sty.priceCard__m2CkN)}
                  description={
                    <React.Fragment>
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__pfven
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__p3PDk
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__w50Op
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__lDdCl
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__pOztc
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__nt3Ck
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />
                    </React.Fragment>
                  }
                  dollars={"8"}
                  label={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__sd2Ac
                      )}
                    >
                      {"Pro"}
                    </div>
                  }
                />

                <PriceCard
                  action={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__i1Waq
                      )}
                    >
                      {"Buy Team"}
                    </div>
                  }
                  className={classNames("__wab_instance", sty.priceCard__tf6KG)}
                  description={
                    <React.Fragment>
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__oluZv
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__p1Pt3
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__gs7IV
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__hCBes
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__aa4KP
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__hega4
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__yuHl5
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__uXuoR
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />
                    </React.Fragment>
                  }
                  dollars={"16"}
                  label={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__th8Ur
                      )}
                    >
                      {"Team"}
                    </div>
                  }
                />

                <PriceCard
                  action={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__iTdXg
                      )}
                    >
                      {"Contact us"}
                    </div>
                  }
                  className={classNames("__wab_instance", sty.priceCard__yL11P)}
                  description={
                    <React.Fragment>
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp___7Lzqd
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg___90APp
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__yOR
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__zTx1I
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__ydjh6
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__waz0G
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__uuzt8
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__pNnAd
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />
                    </React.Fragment>
                  }
                  dollars={"?"}
                  label={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__joLvX
                      )}
                    >
                      {"Enterprise"}
                    </div>
                  }
                  primary={true}
                />
              </p.Stack>
            </p.Stack>
          </p.Stack>

          <FooterSection
            data-plasmic-name={"footerSection"}
            data-plasmic-override={overrides.footerSection}
            className={classNames("__wab_instance", sty.footerSection)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "foreground",
    "foreground2",
    "section",
    "foreground3",
    "h2",
    "columns",
    "footerSection"
  ],

  navbar: ["navbar"],
  foreground: ["foreground"],
  foreground2: ["foreground2"],
  section: ["section", "foreground3", "h2", "columns"],
  foreground3: ["foreground3", "h2", "columns"],
  h2: ["h2"],
  columns: ["columns"],
  footerSection: ["footerSection"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicServices__ArgProps,
          internalVariantPropNames: PlasmicServices__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicServices__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServices";
  } else {
    func.displayName = `PlasmicServices.${nodeName}`;
  }
  return func;
}

export const PlasmicServices = Object.assign(
  // Top-level PlasmicServices renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    foreground: makeNodeComponent("foreground"),
    foreground2: makeNodeComponent("foreground2"),
    section: makeNodeComponent("section"),
    foreground3: makeNodeComponent("foreground3"),
    h2: makeNodeComponent("h2"),
    columns: makeNodeComponent("columns"),
    footerSection: makeNodeComponent("footerSection"),
    // Metadata about props expected for PlasmicServices
    internalVariantProps: PlasmicServices__VariantProps,
    internalArgProps: PlasmicServices__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Services",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicServices;
/* prettier-ignore-end */

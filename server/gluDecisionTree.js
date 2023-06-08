// const glucoseDecisionTree = {
//   highGlucose: {
//     insulinProvided: {
//       // calculate HOMA IR
//       ir: {
//         hba1cProvided: {
//           // Estimate of how long ir
//           diabetic: {
//             // check damage status (ox stress)
//             bilirubinProvided: {
//               ggtProvided: {
//                 // compare bili and ggt values
//                 bothHigh: {
//                   // RESPOND WITH RESULT: IR AND OX DAMAGE, CRITICAL
//                 },
//                 oneHigh: {
//                   // some ox damage, let's check TAG
//                   tagProvided: {
//                     high: {
//                       // RESPOND WITH RESULT: TYPICAL IMAGE OF IR AND OX
//                       // DAMAGE, CRITICAL. SEEK INTERVENTION
//                     },
//                     normal: {
//                       // RESPOND WITH RESULT: FOOD -> ENERGY NOT WORKING
//                       // REVERSIBLE WITH LIFESTYLE INTERVENTION MODERATE
//                     }
//                   },
//                   tagNotProvided: {
//                     // RESPOND WITH RESULT: IR AND OX DAMAGE, GET LIPIDS
//                   }
//                 },
//                 neitherHigh: {
//                   // awesome, likely haven't been ir for long. check tag
//                   tagProvided: {
//                     high: {
//                       // RESPOND WITH RESULT: IR SOON TO TURN INTO ARTERIAL DAMAGE
//                     },
//                     normal: {
//                       // RESPOND WITH RESULT: NOT IR LONG, EASY TURN AROUND
//                       // BUT DAMAGE IS AROUND THE CORNDER IF LIFESTYLE CONT
//                     }
//                   },
//                   tagNotProvided: {
//                     // RESPOND WITH RESULT: NOT IR LONG, NO IMMEDIATE SIGNS OF DAMAGE, BUT GET LIPIDS
//                   }
//                 }
//               },
//               ggtNotProvided: {
//                 // Provide Question 6 (11)
//                 scoreAtLeastWatch: {
//                   // RESPOND WITH RESULT: IR AND OX DAMAGE, CHECK GGT
//                 },
//                 lowScore: {
//                   // RESPOND WITH RESULT: NOT IR LONG, NO IMMEDIATE SIGNS OF DAMAGE, BUT GET GGT
//                 }
//               }
//             },
//             bilirubinNotProvided: {
//               ggtProvided: {
//                 // compare just the ggt
//                 high: {
//                   // RESPOND WITH RESULT: IR AND OX DAMAGE, LIFESTYLE ISSUES LIKE ALCOHOLISM PROCESSED FOODS CRITICAL
//                 },
//                 normal: {
//                   // RESPOND WITH RESULT: NOT IR LONG, NO IMMEDIATE SIGNS OF DAMAGE, EASY TURN AROUND BUT DMG AROUND CORNER
//                 }
//               },
//               ggtNotProvided: {
//                 // Ask question 6 (11)
//                 scoreAtLeastWatch: {
//                   // RESPOND WITH RESULT: IR AND OX DAMAGE, LIFESTYLE ISSUES LIKE ALCOHOLISM PROCESSED FOODS CRITICAL
//                 },
//                 lowScore: {
//                   // RESPOND WITH RESULT: NOT IR LONG, NO IMMEDIATE SIGNS OF DAMAGE, EASY TURN AROUND BUT DMG AROUND CORNER
//                 }
//               }
//             }
//           },
//           preDiabetic: {
//             // check damage status (ox stress)
//             bilirubinProvided: {
//               ggtProvided: {
//                 // compare bili and ggt values
//                 bothHigh: {
//                   // RESPOND WITH RESULT: IR AND OX DAMAGE, MODERATE
//                 },
//                 oneHigh: {
//                   // some ox damage, let's check TAG
//                   tagProvided: {
//                     high: {
//                       // RESPOND WITH RESULT: TYPICAL IMAGE OF IR AND OX
//                       // DAMAGE, CRITICAL. SEEK INTERVENTION
//                     },
//                     normal: {
//                       // RESPOND WITH RESULT: FOOD -> ENERGY NOT WORKING
//                       // REVERSIBLE WITH LIFESTYLE INTERVENTION MODERATE
//                     }
//                   },
//                   tagNotProvided: {
//                     // RESPOND WITH RESULT: IR AND OX DAMAGE, GET LIPIDS
//                   }
//                 },
//                 neitherHigh: {
//                   // awesome, likely haven't been ir for long. check tag
//                   tagProvided: {
//                     high: {
//                       // RESPOND WITH RESULT: IR SOON TO TURN INTO ARTERIAL DAMAGE
//                     },
//                     normal: {
//                       // RESPOND WITH RESULT: NOT IR LONG, EASY TURN AROUND
//                       // BUT DAMAGE IS AROUND THE CORNDER IF LIFESTYLE CONT
//                     }
//                   },
//                   tagNotProvided: {
//                     // RESPOND WITH RESULT: NOT IR LONG, NO IMMEDIATE SIGNS OF DAMAGE, BUT GET LIPIDS
//                   }
//                 }
//               },
//               ggtNotProvided: {
//                 // Provide Question 6 (11)
//                 scoreAtLeastWatch: {
//                   // RESPOND WITH RESULT: IR AND OX DAMAGE, CHECK GGT
//                 },
//                 lowScore: {
//                   // RESPOND WITH RESULT: NOT IR LONG, NO IMMEDIATE SIGNS OF DAMAGE, BUT GET GGT
//                 }
//               }
//             },
//             bilirubinNotProvided: {
//               ggtProvided: {
//                 // compare just the ggt
//                 high: {
//                   // RESPOND WITH RESULT: IR AND OX DAMAGE, LIFESTYLE ISSUES LIKE ALCOHOLISM PROCESSED FOODS MODERATE
//                 },
//                 normal: {
//                   // RESPOND WITH RESULT: NOT IR LONG, NO IMMEDIATE SIGNS OF DAMAGE, EASY TURN AROUND BUT DMG AROUND CORNER
//                 }
//               },
//               ggtNotProvided: {
//                 // Ask question 6 (11)
//                 scoreAtLeastWatch: {
//                   // RESPOND WITH RESULT: IR AND OX DAMAGE, LIFESTYLE ISSUES LIKE ALCOHOLISM PROCESSED FOODS MODERATE
//                 },
//                 lowScore: {
//                   // RESPOND WITH RESULT: NOT IR LONG, NO IMMEDIATE SIGNS OF DAMAGE, EASY TURN AROUND BUT DMG AROUND CORNER
//                 }
//               }
//             }
//           },
//           slipping: {
//             // check damage status (ox stress)
//             bilirubinProvided: {
//               ggtProvided: {
//                 // compare bili and ggt values
//                 bothHigh: {
//                   // RESPOND WITH RESULT: IR AND OX DAMAGE, MODERATE
//                 },
//                 oneHigh: {
//                   // some ox damage, let's check TAG
//                   tagProvided: {
//                     high: {
//                       // RESPOND WITH RESULT: TYPICAL IMAGE OF IR AND OX
//                       // DAMAGE, MODERATE. SEEK INTERVENTION
//                     },
//                     normal: {
//                       // RESPOND WITH RESULT: FOOD -> ENERGY NOT WORKING
//                       // REVERSIBLE WITH LIFESTYLE INTERVENTION MODERATE
//                     }
//                   },
//                   tagNotProvided: {
//                     // RESPOND WITH RESULT: IR AND OX DAMAGE, GET LIPIDS
//                   }
//                 },
//                 neitherHigh: {
//                   // awesome, likely haven't been ir for long. check tag
//                   tagProvided: {
//                     high: {
//                       // RESPOND WITH RESULT: IR SOON TO TURN INTO ARTERIAL DAMAGE
//                     },
//                     normal: {
//                       // RESPOND WITH RESULT: NOT IR LONG, EASY TURN AROUND
//                       // BUT DAMAGE IS AROUND THE CORNDER IF LIFESTYLE CONT
//                     }
//                   },
//                   tagNotProvided: {
//                     // RESPOND WITH RESULT: NOT IR LONG, NO IMMEDIATE SIGNS OF DAMAGE, BUT GET LIPIDS
//                   }
//                 }
//               },
//               ggtNotProvided: {
//                 // Provide Question 6 (11)
//                 scoreAtLeastWatch: {
//                   // RESPOND WITH RESULT: IR AND OX DAMAGE, CHECK GGT
//                 },
//                 lowScore: {
//                   // RESPOND WITH RESULT: NOT IR LONG, NO IMMEDIATE SIGNS OF DAMAGE, BUT GET GGT
//                 }
//               }
//             },
//             bilirubinNotProvided: {
//               ggtProvided: {
//                 // compare just the ggt
//                 high: {
//                   // RESPOND WITH RESULT: IR AND OX DAMAGE, LIFESTYLE ISSUES LIKE ALCOHOLISM PROCESSED FOODS MODERATE
//                 },
//                 normal: {
//                   // RESPOND WITH RESULT: NOT IR LONG, NO IMMEDIATE SIGNS OF DAMAGE, EASY TURN AROUND BUT DMG AROUND CORNER
//                 }
//               },
//               ggtNotProvided: {
//                 // Ask question 6 (11)
//                 scoreAtLeastWatch: {
//                   // RESPOND WITH RESULT: IR AND OX DAMAGE, LIFESTYLE ISSUES LIKE ALCOHOLISM PROCESSED FOODS MODERATE
//                 },
//                 lowScore: {
//                   // RESPOND WITH RESULT: NOT IR LONG, NO IMMEDIATE SIGNS OF DAMAGE, EASY TURN AROUND BUT DMG AROUND CORNER
//                 }
//               }
//             }
//           },
//           notDiabetic: {
//             // RETURN WITH RESULT: HIGH GLU AND IR, BUT NOT DIABETIC. CUT DOWN ON CARBS AND PROCESSED FOODS, PRIORITIZE ANIMAL MEATS FOR PROTEIN AND HEALTHY FATS
//           }
//         },
//         hba1cNotProvided: {
//           // check if they have an eag instead
//           // eagProvided: {
//           //   diabetic: {},
//           //   slipping: {},
//           //   notDiabetic: {
//           //     // RETURN WITH RESULT: HIGH GLU AND IR, BUT NOT DIABETIC. CUT DOWN ON CARBS AND PROCESSED FOODS, PRIORITIZE ANIMAL MEATS FOR PROTEIN AND HEALTHY FATS
//           //   }
//           // },
//           // eagNotProvided: {
//           //   // no hba1c or eeg, so last effort check TAG
//           //   tagProvided: {
//           //     high: {
//           //       // RESPOND WITH RESULT: HIGH GLU, IR, SHOWING SIGNS OF DIABETES. RECOMMEND HBA1C
//           //     },
//           //     normal: {
//           //       // RESPOND WITH RESULT: HIGH GLU, IR, BUT NOT QUITE DIABETIC. RECOMMEND LIFESTYLE INTERVENTION
//           //     }
//           //   },
//           //   tagNotProvided: {
//           //     // give out question 6 (11)
//           //     scoreAtLeastWatch: {
//           //       // RESPOND WITH RESULT: HIGH GLU AND IR, LIKELY OX STRESS. RECOMMEND HBA1C GGT BILIRUBIN AND LIPIDS
//           //     },
//           //     lowScore: {
//           //       // RESPOND WITH RESULT: HIGH GLU AND IR, BUT NEED MORE INSIGHT. RECOMMEND HBA1C GGT BILIRUBIN AND LIPIDS
//           //     }
//           //   }
//           // }
//           // RETURN WITH RESULT FOR NOW: NEED MORE INSIGHT. HIGH GLU AND IR, RECOMMEND HBA1C
//         }
//       },
//       notIR: {
//         // give out Question 1
//         scoreAtLeastWatch: {},
//         lowScore: {}
//       },
//     },
//     insulinNotProvided: {
//       // check hba1c, but recommend getting insulin
//     }
//   },
//   lowGlucose: {
//     insulinProvided: {
//       // calculate their HOMA-IR
//       ir: {
//         // check for oxidative stress
//         bilirubinProvided: {},
//         bilirubinNotProvided: {}
//       },
//       notIR: {
//         // RESPOND WITH RESULT: NEED MORE INSIGHT, RECOMMEND GETTING CORTISOL AND THYROID/HORMONE PANEL
//       }
//     },
//     insulinNotProvided: {
//       // give out Question 2
//       scoreAtLeastWatch: {
//         // RESPOND WITH RESULT: NEED MORE INSIGHT, RECOMMEND GETTING CORTISOL AND INSULIN
//       },
//       lowScore: {
//         // RESPOND WITH RESULT: NEED MORE INSIGHT, RECOMMEND GETTING INSULIN AND THYROID/HORMONE PANEL
//       }
//     }
//   },
//   normalGlucose: {
//     insulinProvided: {},
//     insulinNotProvided: {
//       hba1cProvided: {
//         diabetic: {
//           // check ox damage
//         },
//         prediabetic: {
//           // check ox damage
//         },
//         slipping: {
//           // RESPOND WITH RESULT: NORMAL GLUCOSE NOW BUT HISTORY OF OVERABUNDANCE IN BLOOD, RECOMMEND INSULIN
//         },
//         normal: {
//           // RESPOND WITH RESULT: LOOKING PRETTY HEALTHY KEEP UP THE GOOD WORK
//         }
//       },
//       hba1cNotProvided: {
//         tagProvided: {},
//         tagNotProvided: {}
//       }
//     }
//   }
// };

const glucoseDecisionTree = {
  highGlucose: {
    insulinProvided: {
      ir: {
        hba1cProvided: {
          diabetic: {
            bilirubinProvided: {
              ggtProvided: {
                bothHigh: { 'END HERE WITH: IR, DIABETIC, OX DAMAGE CRITICAL'},
                oneHigh: {
                  tagProvided: {
                    high: { 'END HERE WITH: IR, DIABETIC, OX DAMAGE, ISS WITH ENERGY CONVERSION LIPIDS'},
                    normal: { 'END HERE WITH: IR, DIABETIC, BUT NO EARLY SIGNS OF DMG NOT TOO LATE LIFESTYLE CHG'}
                  },
                  tagNotProvided: {'END: IR, DIABETIC, BUT NO EARLY SIGNS OF DMG NOT TOO LATE RECOM LIPIDS'}
                },
                neitherHigh: {
                  tagProvided: {
                    high: {'END: CLEAR SIGNS OF IR DIABETIC, BUT NO OXIDATION DMG, LIPID ISS SUGGEST FULL QUIZ'},
                    normal: {'END: CLEAR SIGNS OF IR DIABETIC, BUT NO OX DMG, GOOD TAG. TAKE FULL QUIZ'}
                  },
                  tagNotProvided: {'END: CLEAR SIGNS OF IR DIABETIC NO OX DMG YET RECOM LIPIDS'}
                }
              },
              ggtNotProvided: {
                tagProvided: {
                  high: {},
                  normal: {}
                },
                tagNotProvided: {}
              }
            },
            bilirubinNotProvided: {
              ggtProvided: {},
              ggtNotProvided: { 'END HERE WITH: IR DIABETIC LIKELY OX DMG CONFIRM WITH BILI GGT' }
            }
          },
          preDiabetic: {
            bilirubinProvided: {
              ggtProvided: {
                bothHigh: {'END HERE WITH: IR, PREDIABETIC, OX DAMAGE CRITICAL'},
                oneHigh: {
                  tagProvided: {
                    high: {'END HERE WITH: IR, PREDIABETIC, OX DAMAGE, ISS WITH ENERGY CONVERSION LIPIDS'},
                    normal: {'END HERE WITH: IR, PREDIABETIC, BUT NO EARLY SIGNS OF DMG NOT TOO LATE LIFESTYLE CHG'}
                  },
                  tagNotProvided: {'END: IR, PREDIABETIC, BUT NO EARLY SIGNS OF DMG NOT TOO LATE RECOM LIPIDS'}
                },
                neitherHigh: {
                  tagProvided: {
                    high: {'END: CLEAR SIGNS OF IR PREDIABETIC, BUT NO OXIDATION DMG, LIPID ISS SUGGEST FULL QUIZ'},
                    normal: {'END: CLEAR SIGNS OF IR PREDIABETIC, BUT NO OX DMG, GOOD TAG. TAKE FULL QUIZ'}
                  },
                  tagNotProvided: {'END: CLEAR SIGNS OF IR PREDIABETIC NO OX DMG YET RECOM LIPIDS'}
                }
              },
              ggtNotProvided: {
                tagProvided: {
                  high: {},
                  normal: {}
                },
                tagNotProvided: {}
              }
            },
            bilirubinNotProvided: {
              ggtProvided: {},
              ggtNotProvided: { 'END HERE WITH: IR PREDIABETIC LIKELY OX DMG CONFIRM WITH BILI GGT'}
            }
          },
          slipping: {
            bilirubinProvided: {
              ggtProvided: {
                bothHigh: {'END HERE WITH: IR, SLIPPING DIABETIC, OX DAMAGE MODERATE'},
                oneHigh: {
                  tagProvided: {
                    high: {'END HERE WITH: IR, SLIPPING DIABETIC, OX DAMAGE, ISS WITH ENERGY CONVERSION LIPIDS'},
                    normal: {'END HERE WITH: IR, SLIPPING D, BUT NO EARLY SIGNS OF DMG NOT TOO LATE LIFESTYLE CHG'}
                  },
                  tagNotProvided: {'END: IR, SLIPPING D, BUT NO EARLY SIGNS OF DMG NOT TOO LATE RECOM LIPIDS'}
                },
                neitherHigh: {
                  tagProvided: {
                    high: {'END: CLEAR SIGNS OF IR SLIPPING D, BUT NO LIPID OXIDATION DMG, SUGGEST FULL QUIZ'},
                    normal: {'END: CLEAR SIGNS OF IR SLIPPING D, BUT NO OX DMG, GOOD TAG. TAKE FULL QUIZ'}
                  },
                  tagNotProvided: {'END: CLEAR SIGNS OF IR SLIPPING D NO OX DMG YET RECOM LIPIDS'}
                }
              },
              ggtNotProvided: {
                tagProvided: {
                  high: {},
                  normal: {}
                },
                tagNotProvided: {}
              }
            },
            bilirubinNotProvided: {
              ggtProvided: {},
              ggtNotProvided: { 'END HERE WITH: IR SLIPPING DIABETIC LIKELY OX DMG CONFIRM WITH BILI GGT'}
            }
          },
          notDiabetic: {
            bilirubinProvided: {
              ggtProvided: {
                bothHigh: {'END HERE WITH: IR, NOT DIABETIC, BUT SOMETHING CAUSING OX STRESS'},
                oneHigh: {
                  tagProvided: {
                    high: {'END HERE WITH: IR, NOT DIABETIC, BUT SOMETHING CAUSING OX STRESS'},
                    normal: {'END HERE WITH: IR, NOT DIABETIC, NO EARLY SIGNS OF DMG NOT TOO LATE RECOM LIPIDS'}
                  },
                  tagNotProvided: {'END: IR, NOT DIABETIC, NO EARLY SIGNS OF DMG NOT TOO LATE LIFESTYLE CHG'}
                },
                neitherHigh: {
                  tagProvided: {
                    high: {'END: IR, NOT DIABETIC, NO EARLY SIGNS OF DMG, BUT LIPID METABOLIC ISSUES FULL QUIZ'},
                    normal: {'END IR NOT DIABETIC NO EARLY SIGNS OF DMG NO ISSUES WITH TAG RELATIVELY HEALTHY'}
                  },
                  tagNotProvided: {'END IR NOT DIABETIC NO EARLY SIGNS OF DMG RELATIVELY HEALTHY RECOM LIPIDS'}
                }
              },
              ggtNotProvided: {
                tagProvided: {
                  high: {},
                  normal: {}
                },
                tagNotProvided: {}
              }
            },
            bilirubinNotProvided: {
              ggtProvided: {},
              ggtNotProvided: { 'END HERE WITH: IR BUT NOT DIABETIC, LIKELY NO LONG OX DMG TEMPORARY IR'}
            }
          }
        },
        hba1cNotProvided: {
          bilirubinProvided: {
            ggtProvided: {
              bothHigh: {'END HERE WITH: IR, OX DAMAGE LIPIDS RECOMMEND HBA1C'},
              oneHigh: {
                tagProvided: {
                  high: {'END HERE WITH: IR, OX DAMAGE LIPIDS RECOMMEND HBA1C'},
                  normal: {'END HERE WITH: IR, SLIGHT OX DMG RECOMMEND HBA1C'}
                },
                tagNotProvided: {'END HERE WITH: IR, SLIGHT OX DMG RECOMMEND HBA1C, LIPIDS'}
              },
              neitherHigh: {
                tagProvided: {
                  high: {'END: IR, NO OX DAMAGE YET BUT ISSUES WITH LIPID METABOLISM, RECOM FULL QUIZ'},
                  normal: {'END IR NO OX DAMAGE YET LIPID MET IS GOOD RELATIVELY HEALTHY BUT RECOM HBA1C'}
                },
                tagNotProvided: {'END: IR NO OX DAMAGE YET RELATIVELY HEALTHY BUT RECOM LIPID HBA1C'}
              }
            },
            ggtNotProvided: {
              tagProvided: {
                high: {},
                normal: {}
              },
              tagNotProvided: {}
            }
          },
          bilirubinNotProvided: {
            ggtProvided: {},
            ggtNotProvided: { 'END RESULT WITH IR BUT NEED MORE INSIGHT HBA1C GGT BILI'}
          }
        }
      },
      notIR: { 'END IT HERE WITH QUESTION' }
    },
    insulinNotProvided: {
      hba1cProvided: {
        diabetic: {
          bilirubinProvided: {
            ggtProvided: {
              bothHigh: { 'END HERE WITH: IR, DIABETIC, OX DAMAGE CRITICAL'},
              oneHigh: {
                tagProvided: {
                  high: {'END HERE WITH: IR, DIABETIC, OX DAMAGE, ISS WITH ENERGY CONVERSION LIPIDS'},
                  normal: {'END HERE WITH: IR, DIABETIC, BUT NO EARLY SIGNS OF DMG NOT TOO LATE LIFESTYLE CHG'}
                },
                tagNotProvided: {'END: IR, DIABETIC, BUT NO EARLY SIGNS OF DMG NOT TOO LATE RECOM LIPIDS'}
              },
              neitherHigh: {
                tagProvided: {
                  high: {'END: CLEAR SIGNS OF IR DIABETIC, BUT NO OXIDATION DMG, LIPID ISS SUGGEST FULL QUIZ'},
                  normal: {'END: CLEAR SIGNS OF IR DIABETIC, BUT NO OX DMG, GOOD TAG. TAKE FULL QUIZ'}
                },
                tagNotProvided: {'END: CLEAR SIGNS OF IR DIABETIC NO OX DMG YET RECOM LIPIDS'}
              }
            },
            ggtNotProvided: {
              tagProvided: {
                high: {},
                normal: {}
              },
              tagNotProvided: {}
            }
          },
          bilirubinNotProvided: {
            ggtProvided: {},
            ggtNotProvided: { 'END HERE WITH RESULT: IR AND DIABETIC BUT NEED MORE INSIGHT BILI GGT'}
          }
        },
        preDiabetic: {
          bilirubinProvided: {
            ggtProvided: {
              bothHigh: { 'END HERE WITH: IR, PREDIABETIC, OX DAMAGE CRITICAL'},
              oneHigh: {
                tagProvided: {
                  high: {'END HERE WITH: IR, PREDIABETIC, OX DAMAGE, ISS WITH ENERGY CONVERSION LIPIDS'},
                  normal: {'END HERE WITH: IR, PREDIABETIC, BUT NO EARLY SIGNS OF DMG NOT TOO LATE LIFESTYLE CHG'}
                },
                tagNotProvided: {'END: IR, PREDIABETIC, BUT NO EARLY SIGNS OF DMG NOT TOO LATE RECOM LIPIDS'}
              },
              neitherHigh: {
                tagProvided: {
                  high: {'END: CLEAR SIGNS OF IR PREDIABETIC, BUT NO OXIDATION DMG, LIPID ISS SUGGEST FULL QUIZ'},
                  normal: {'END: CLEAR SIGNS OF IR PREDIABETIC, BUT NO OX DMG, GOOD TAG. TAKE FULL QUIZ'}
                },
                tagNotProvided: {'END: CLEAR SIGNS OF IR PREDIABETIC NO OX DMG YET RECOM LIPIDS'}
              }
            },
            ggtNotProvided: {
              tagProvided: {
                high: {},
                normal: {}
              },
              tagNotProvided: {}
            }
          },
          bilirubinNotProvided: {
            ggtProvided: {},
            ggtNotProvided: { 'END HERE WITH RESULT: IR AND PREDIABETIC BUT NEED MORE INSIGHT BILI GGT'}
          }
        },
        slipping: {
          bilirubinProvided: {
            ggtProvided: {
              bothHigh: {'END HERE WITH: IR, SLIPPING DIABETIC, OX DAMAGE MODERATE'},
              oneHigh: {
                tagProvided: {
                  high: {'END HERE WITH: IR, SLIPPING DIABETIC, OX DAMAGE, ISS WITH ENERGY CONVERSION LIPIDS'},
                  normal: {'END HERE WITH: IR, SLIPPING D, BUT NO EARLY SIGNS OF DMG NOT TOO LATE LIFESTYLE CHG'}
                },
                tagNotProvided: {'END: IR, SLIPPING D, BUT NO EARLY SIGNS OF DMG NOT TOO LATE RECOM LIPIDS'}
              },
              neitherHigh: {
                tagProvided: {
                  high: {'END: CLEAR SIGNS OF IR SLIPPING D, BUT NO OXIDATION DMG, LIPID ISS SUGGEST FULL QUIZ'},
                  normal: {'END: CLEAR SIGNS OF IR SLIPPING, BUT NO OX DMG, GOOD TAG. TAKE FULL QUIZ'}
                },
                tagNotProvided: {'END: CLEAR SIGNS OF IR SLIPPING D, NO OX DMG YET RECOM LIPIDS'}
              }
            },
            ggtNotProvided: {
              tagProvided: {
                high: {},
                normal: {}
              },
              tagNotProvided: {}
            }
          },
          bilirubinNotProvided: {
            ggtProvided: {},
            ggtNotProvided: { 'END HERE WITH RESULT: IR AND SLIPPING DIABETIC BUT NEED MORE INSIGHT BILI GGT'}
          }
        },
        notDiabetic: {
          bilirubinProvided: {
            ggtProvided: {
              bothHigh: {'END HERE WITH: NOT IR, NOT DIABETIC, BUT SOMETHING CAUSING OX STRESS'},
              oneHigh: {
                tagProvided: {
                  high: {'END HERE WITH: NOT IR, NOT DIABETIC, BUT SOMETHING CAUSING OX STRESS'},
                  normal: {'END HERE WITH: NOT IR, NOT DIABETIC, NO EARLY SIGNS OX'}
                },
                tagNotProvided: {'END HERE WITH: NOT IR, NOT DIABETIC, NO EARLY SIGNS OX RECOM LIPIDS'}
              },
              neitherHigh: {
                tagProvided: {
                  high: {'END: NOT IR, NOT DIABETIC, NO EARLY SIGNS OF OX, BUT ISSUES W LIPID MET. FULL QUIZ'},
                  normal: {'END NOT IR, NOT DIABETIC, NO EARLY SIGNS OF OX, GOOD LIPID MET, RELATIVELY HEALTHY'}
                },
                tagNotProvided: {'END NOT IR, NOT DIABETIC, NO EARLY SIGNS OF OX, GET LIPID IN CASE; HEALTHY'}
              }
            },
            ggtNotProvided: {
              tagProvided: {
                high: {},
                normal: {}
              },
              tagNotProvided: {}
            }
          },
          bilirubinNotProvided: {
            ggtProvided: {},
            ggtNotProvided: { 'END HERE WITH RESULT: GLU WAS HIGH BUT NOT DIABETIC, COULD BE NO FAST? INS RECOM'}
          }
        }
      },
      hba1cNotProvided: {
        bilirubinProvided: {
          ggtProvided: {
            bothHigh: {'END WITH RESULT: NEED MORE INSIGHT INS HBA1C. OX STRESS FROM SOMETHING'},
            oneHigh: {
              tagProvided: {
                high: {'END WITH RESULT: NEED MORE INSIGHT INS HBA1C. OX STRESS FROM SOMETHING'},
                normal: {'END WITH RESULT: NEED MORE INSIGHT INS HBA1C. NO EARLY SIGNS OX STRESS'}
              },
              tagNotProvided: {'END WITH RESULT: NEED MORE INSIGHT INS HBA1C LIPIDS. NO EARLY SIGNS OX STRESS'}
            },
            neitherHigh: {
              tagProvided: {
                high: {'END: NEED MORE INSIGHT INS HBA1C - ISS W FAT METABOLISM TAKE FULL QUIZ'},
                normal: {'END NEED MORE INSIGHT INS HBA1C, BUT OVERALL RELATIVELY HEALTHY GOOD LIPID MET'}
              },
              tagNotProvided: {'END NEED MORE INSIGHT INS HBA1C LIPIDS TAKE FULL QUIZ'}
            }
          },
          ggtNotProvided: {
            tagProvided: {
              high: {},
              normal: {}
            },
            tagNotProvided: {}
          }
        },
        bilirubinNotProvided: {
          ggtProvided: {},
          ggtNotProvided: { 'END WITH RESULT: NEED MORE INSIGHT INS GGT BILI'}
        }
      }
    }
  },
  lowGlucose: {},
  normalGlucose: {}
};
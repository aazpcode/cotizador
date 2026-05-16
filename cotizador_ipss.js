const LOGO = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCACLA4kDASIAAhEBAxEB/8QAHQABAAEFAQEBAAAAAAAAAAAAAAcBBQYICQIEA//EAFsQAAAFAwEDCAYFBQsHCQkAAAABAgMEBQYRBxIhMQgTQVFWYaXTFBgicYGRFRcyobEJI0K0wRYkMzhSYnKyxNHhJzQ3hIWS8DVDR1NUVWNkdERFZXN1gsLS8f/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACYRAQEAAgIDAAICAgMBAAAAAAABAhEDIRITMQQyIkEjQlFSYXH/2gAMAwEAAhEDEQA/AMt5Jelyp1JevG9no9ZNbxtU2MbCSZQSDwpxSce0raIyIj3Fsme8zLGzjTaGm0ttIShCSwSUlgiL3CO+TT/oVoX9KV+tOiRgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfBXqJR6/TnKdXKXDqUN1JpWxKZS4gyPuUQ+8AHNnlg6TQdMdSI50RKm6BWGVSYbSlGo2FJMicaye8yLKTIz34URHnGThXnVdaPmNxvymSsFp+RER7X0l/ZRplg+oxqXTNm3UfkpzmqjoJbk1hK0tuqlmklkRHulvF0e4SgIf5GP8Wu1P9c/XXxMAy0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdIAAAAAA8qMsYyJsegFnqtdp8D2VyCUr+SneYxeraiQYRntLZZR0KdcLf8ADI5X8jCXTWOGV7qQAEMVDWmjsu7J1qAjuwZj8outVGddJKazCUfxL8Rm/kz/AIq+H/qbAEdUfUmHNUWy9FkIPgbbpZ/EZZAuCnTMEl7ZV1GX7RcfyMMkywsXnIDwk0qSSiPJGPRGOsu+2e1RQzFT4Cgu0qoAQCqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANNfymH8Jp576j/ZRqHzhdQ28/KYfwmnnvqP9lGnw6YVzzdK+Rj/FrtT/AFz9dfEwCHuRepKuTTaikmZkfpmMl/518TCOboAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0gAAY8mrA9HwHyz5LMSMt95RElJDOWUkXHuk6cxDYN59ZJSQifUzVWm0CEp+ZMKK0rchBK9tXw6BiOueqsagx3FKd2pS90Zgj4d5jWGJEu3U67FNtofny3zI9hG9DZZ6uGCHHj4uTmvd1Dk5Jxfr3WY3trfW6nJdbobZQ4yslziiypX9ww2n0q/bxkE7Hj1WpbZ/aSS1JIxtPpJyb6DRGGJ91JKoziwZN5PYQfV0Z+Im30aiW5TDcQxEgRmuJpbJO74EPZjjx8M1jNvL/AJM75ZVonT9ANSqg1tO0hDZ9bruyf3kE/k86kxEE4mlIcLp2F7R/gN3P3c2ihLpqrcUks7JLUZns5M8EWfePyrV9Uel1BmI8h9S3kJWyaCyl0jLOC795Dc5b/wBS8Uy+1oHUravuzXSN+FVIJ53LJKiT8TGSWbrTcdH5uNVFHOYRjKiVhXf1jfBl2i3DEWfMx5iSLZWlaCUaDMuB5EQ6qcnO2LmjuyKIn6JqBe0nm/sLPvLoIYzx4uWayi32cf6dv20t1Zpdejp9Em86okkbjLisLT7usTDSqhHnRkusuEo+kukhzjuy3Lq0yuj0WYl+HIbXlDqckhZF095DYfQfVtNcJEOQ6TFRZIiU2Z/wvePHnxZcHcu8Xp4+XzmrO20STFcD4KRUWahEQ+yZYUW/uPqH3pMdZlMpss0qAZDpG0AADAAFMgCbVAMigG1QFDDIG1QFMhkDaoARih8QNqgKZDIG1QFMhkDaoAKZBVQFBXIJsAUADaoAGQXYAoZ7xXIJsAUyGQNqgKZDIG1QFMhkwNqgKZDIG1QFMmGQNqgKZFd4GwBTJhkwNqgAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA00/KZHhWnpn0HUv7KNOufT/ACTG4n5TT/o+/wBpf2UaZiy2JZK6i8k2cmpcn+25qGzbS6csySZ5MsS3i/YJTEPci/8Ai02n/rn66+JhC9UnwAAEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzEoosySkzPgQiDWy9ItCpUqc68XMR0HhP8tfV9wk645xQKU86Z4UZGlPvPcNGuU5dDtQuFqgtuGpiOknHiI/tLPB5P7xwymXLyzin/2tWzDC5VgrSK5qTfaGiJyRJlu4QkiMyQn9m4b36M6a0nTy324kdlC56kkqRJxvcP8AuEY8jLT9ukW85d1Rj7UuaeI5rTvQ33fEhsY5k2jIjweNx949/Jn/AKx5uLGa8qsL92Udi5HqDIlE1IbZ54zWkySlOM71cOkY7rFEYctw6+c2aSIbe0hlj2kO5PHtERGZ8egRpdy5s24pybml8wknFE4yhnYU8wRmRGR54Y/EXO0bxqyGHaFU58Fw5DRlTjNZbKiI9xe/BH8hiY1rKsRu+o2lBp1PYqSXZVMiOeky2UINK0vKwREZmXAjIhdIlyLrFHTzSqnLJ4lFSVbH8Ar9AjPHAt3yHw6vy4ytI6/HlQGSnE60ZyiaJKnC2y+fvGRaVXSijaUW8pMRMh1OVEWxtmaCxn3HwHaY9Ofl2kTSWTRf3MqlMoYiycmuoI5wjUThbsq37txELoxelIm3LFosBa33ZTHPNvoSamjTgzxtFuzu6xr2cmjuXTWJNt1FUNqaZLqLLr+CSrcWzs/pbiLcL9ajcxitQotoyX243Pk4lg2zNtlkzLJpPhgyIyGMsJ9bxzu0wamWJRr8t12m1aMjnTSfNPY9pCugyMaD3tbte0yvpUZ3MeRHd22XE7icR3DpI3vQk1Hk8YM8YEJcrXTxm67IXWIzJHU6aW22pKd6kdJffkZ49b1U5Zf2n9Px0F1BjXBSIswnfaWRIkI/kL/4MTm0olJIy35Ic8eT3cy6HeZQHXDbjzMIUWcFtFnBkXvwN9bNn+mUlG2f5xG4/d0DxZY3i5fX/X16pyezjmS7S3DajuOEWTQg1F8CGA6PX3Mvb6XTJjNxygylMpNP6RFjvGd1H/MJH/ylfgYhHkqHkro/+pufsHrxnVcM7qysji6rxmtW5Vj1dpEZs0pKLIPclSsfZM+s8jMr8rcigWjPq8dvnXo7ZKbSZ+yrKiL9oiuvWDDvl67GCWUapsSGlxJKS9tteF788cCzwb7mz9Oa/ZN0n6PX6Y2hHtq/zhBOIwZGfcZfIauElumZybSHdt+S7asykyno7b9XqriGWU5wglKMiMzPPRtZ4j8Khc18Wq3FnV2HEqFPfWSHVRSMlsGfA957y48BW9bDiX3p3TqYUxUOYwhL8J4j3pWWD/YQjVi/L005lx7d1OpaajR1GSWpyU7ScFuI1bt592RNFu0nVW5b3m3a/Tbcp0Q4jLBOG/JSfEyI8cSzxGM2dqBqFdNYrdHgQqSh+jOm24ZpVhwy3bva7hMUN2LJpiJsPm1NPM7aFJLiWNwg/k0katTtQlmZf55jGP5x7xmzpcd7ZO9qTXYWkdUumpUxqPVKe86040aTJJ7ClFkt/Tsj7KnfNwLsGg1miUtEqpVZWxzR/Zb4ntce4eOUyyhvRWvkSUpI2lGewWzk8GL1o2whemdvLcQhRojbRHs7y3mNYyeO1t7YHceoeoVCu6m21Ji0k5NQLDSyQrBe/wBoZDTLi1ATdyraqkGEla4q3mJTSD5s8YyR7+O8YjrAkla92aSiyWD/AAE7usNms3dlPOEk0EeN5F3CX6m0faF6gz79g1VyoQERHIEs4/sn9rBFv4i96kXPJteJDdjtJfN97YMlcSLJf3iNeSOojjXWngZVVeS6txDMdbCJR28WySyVUm/Zzx9tGQn7Lb/Bjc6/9R41l1S73aXTY8CFzy0MuNqJxSEKMsn7XSRDxSr81KqNiwbyjUemvRZCScOOSTNwk7eyZ/aGV8oVskaJXQRFjNPcIsF9ncPz5Opbejdvkoso9GMsKLfjbUKuV+F56huU0qZR6NAObX6ogltx8kRNp6VL7iLJ/AVfh6msREzU1WmSJBFtnDJtRJP+bnPw4jCbZ2FcrGroll+cbpyUxdr7JILnOHwE8kksYIiwZHkhlIxLTC+ol50+R+YVFqENw2pcZXFtZf8A9L5jKpZOnHcJkyS4aT2TPgR9Ag3Sc1N8pG+WoWPQzZSpwiPBc5+bLPvwJ3X9kwavxBtGvvUar31VbYgN0rapm9TikK9vO8i+11C52LqjVLik123JkVunXHR0mpxCiy2oiIj6Pf1jEbKk1WLrteC6TCblvbCMNrXslnZ68DJNOdOqvSa/dN83KtH0nVmVkTCF5ShJJL5/ZG5JXK5Ldp5f+pF5QKlMgMUxv6PcUg2zSf5009BHtDNdFtS279jVBmTDOFUqc8bMpro2iMyyXduEIaZ3PXLU0nr9YokBEszqbqHDM97RGaS2sY4FnPwEvcne06XRbckV+JPKoyq0spUh9J5IlnkzSXVg1GXwFzxkulmT7b1vqoKu5uzLTZTJqpltyXlkfNxUfzuG/h8x4q0TUihQHas1VolXNhPOOxNhRbSS3nsZPceM8RiWg6lK1mv5c1Sjm88RHt8dnCMCdVmRIUaiI04354YGLPCtT+cYhZ12t3vZiqrQlkzLQakONvkZm04kzI0mRd5GMD0wvm/b5kVdEZVNjfRj5x1EpCj2z3Hnj3j8eTSazuS+zjEr0AqmZs7/AGdrK9rHxGJcntN1pm3idtrif8pr2+exnOyn/AXplK0SsX61FrUeqJhMuwGjfYkpbVsPJIjPZ4933izaX3hft9UV2rRfo6Mhl9TOwaFHtGkzIz49wzhJVk9OZxXBzf0h6G6bpIL2fsHwEL8mY7z/AHFTSoC4HM/SDxkTuMl+cWKu0uW1XbliRqym7YrKEwSNxp5hJ4WkiI+s+8Y9a1w3zeFFVdFEfpzFPWpSmIriVGtaS3lkyPGTGa283V3rPVHu82PSnG1IfNsyJODyX4CDatbGoekst2rWPI+mLZM+dVBUe2aEn/JLf0dOOgZ01tM9hXVMuG25NRlQFQpUZa2nGVH+kkzLJe/AtGht/T73olRnVKMhhcSWpj2OBpLp9496UXtRb4s+XOpcP0R9ozTMY2d7bu/Pv3kYwTkt86Wnd1G19spb+zg92djd8Q6TyZVPvSuXXeEy2rPS0yzBUSZVQcIzShWT9ksHx3D1c1Rvyx4Sq5LksVqmslmU2hBk4hBcVFkxZuSSkztGrOSSV6edSd9INRYVtZLiJTvX0b9y1SKWZc0cZRLI+lPSH9rtb5t2RZmnj100dwnm/RjeaLvLoP4jGNCtUIeodDSl9KI1WZIjkR95H/SLPRxGF6Jqkr0Dq5SFGbSXF8wRlu2M/wB+Raa1ZdSt626FqZY7Ztz48Rs6jGTuJ9vBbW4unG1vF1DaXL0uWsQ9RKFbcE2G2J7S3XVrSZmRJURbsH3jKriq6KLb8uqSVklEdhS8n0njcXxPAhmh3lTL41Ps+q090tv0F1Mhk/tNLJaCMj+JGL9rZW48iu0e1VG+uO+5z07m2zVhos43f0kkJpPJfdDr/TqDah1VxHo8pt5TbzJ8UYxxIWa878uG3dWqBaziYr0GsmZEokmSkERkXX3jBtPa1BtTXqZTaeh5iiV1G22TjJoTzpZPBfEyF11rc2+UBp4WDJJ7ZFlOMHtlvF0eSfW1bSCV1kPQ/JCvYTuMzHtC8jFjUr0AAI0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0z/Kaf9H3+0v7KNMxun+UpbQs7A2izj6S6f8A0o079HZ/kfeY3MLZti5yXTpJyJzM+THaJmeT/fv66+JlEN8ijHqyWjjqmfrr4mQYbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRQqKGJRg+qE/mIKt+CabU4r3EX+A0FJuRdupxxEma1Tp3Nko+gjVghuvru/wAxS6moj3+gqx8lDUfk1QkztaaKTvFD5OlnuUQ5fg43LPPK1j8y6xxjfy24UWh21Cgt7DLMeOlPURYLf+0YtqTqTTLVsx+44ak1NDa0o2GzyW8yLf8AMV1nRLkWucSLAkSNs9621kkmiIjPaPPEt2PiIVZlwZVpMbDMY5FRaVFVES0tSTSksoVgunJ8e4erGbqZdTpntZ1MtmtUJlwqIb9QlxCeSlbfsn7JGadot+N4/W0qLQLreVGuCmRWKklvnWSjOKLmk8O7eLBEnXI3Z9Nj0v0KFHpUdbdWjLaM3SQWCSpJcTyRH1i12zUWIlWgTY0yYyw04pKkSCwZOmRmSlHgvZ38PcOscrWK8qGhXTbNPLn53ptDcJLbS9kiUjB7iPBb+jiKcmdm7brZOnRCREpDTew/KUW0ZZ6EEZYyeDH769XFOqejDsOuVKNOqjM/C+bQZEgspwW/j08B9uk1Ydg8nan0+BV10uozJziUSmmVKwW0ZYMyI8cR2/0cp+zOblt6hWNKXMt6NClrYSRVBl5RqWSjMvbPOd2DIXOwqlclPq6WI1v+m0ybIUbUpCEkUdrBYIjLeZceIsEuosVp2XVo8f6SchbMBxSEGr0hw0EraWRfLoHy29Gr9Maiy4kqVAnuI9Gj0NbiTJHQa93BOD6T6Bws6dtp/qNRh05knZspqO2rdtqPgY/Jt6n3BRXDjSGpUZ5tSCWg8pPiQga4rimoU+zcMl9cqmMKeSw4kzaUpBfa3Fw+IzPQFiTGiTOdp62GJH59DyVFzbhHj7JcS+I5/Gpd3TTHUykrtHVefDQRoTCnbTai3ZSSv8BuzoxVk1CmRHSPByIyXMZ7i/vGq/LCjk1rDMVspI1x0rPBd6hPPJmlKkW7RnHN2yzzfw3Dj+djq4Zx0/D7yyxTxMSbkV5CeKm1EXvwIu0Fs+s2sVb+k220FLmLdbMjPJkeBKi1ERGZnuEYXLqwyzX3betOiya/UGNz3MKIkNn3qPd0dY6Y/wApqJyf0yazqLMptfrsySgibmOtm13kRHn8RhfKA0rTeLEWp0YjjVmMtJ5b3c+ja3pV+PwH0QdWn6fPbj3nbM6hIcwSZTiicaI+nJpzj4iRqBV4FdpyJ9PkIkR1/YcRwMNWfWeqw+8KDdC6bQJltvttTKXnnWHDwTyTIiNPA+8YtqNTbv1GoSLVftkqey+4n0ma7v5tJZI9jjv39wmk9xbjwYwefqRSouqEaxVkRSXmDdNzbLBK9nCfeefuF2skjJqHSUUm3Y9KaM1EwwTZGZ8cEI10VsquWzfF3VKospRFqUjnGFEfH2jMS6XDjnvFtumrx6BQJlXlEo2YrSnFEXE8EZjN3WppjWt1vVK6tNapRKUSFSpKDSglHu4GLpppS5dFselUuekkSYzGw4RcCPJj49LtQKJf9B+lKS6fsq2XGlfaQf8AwQy8Xd1pLJbtE2otlVmtas25cMFKTgwt7pl1CV1pLOcF39wwbVHUaFYS6Y1LhPy11F42GUtGWTVux+JDKqBOk1GnpkS4a4i1ER82o8ngQ0h63bYvDTK7Ku/QKUVZo9VfORzaTPbaVgix7t3X0jImaXc94XPBqNwU/wCiaXTlG6yxnLjjh9J924ukSh0DEdRr8o1lQGpFSUp16QokR4zW9xxR4Lh8SGp92WdaNYKLMuXTOu0WnEk5UqGttBKPG8y7h50aoU62tNaPRKmlKZcZk0ukR537Rn+0Yiep93R2TqEzTuot0zcZrJ1Cl7J9OyR5+GBmNl6g21dv5mlzCOWSNpyMtJpW33GRh/4ZLNqNYkqbXYd221IRFrcMjLKi3PIPik/hn5jzJuHUSTT/AESJbCY01Sdnn3DPmyPrzxx8B+2o+oyrEjLn1KgynYKVEk3W1Fgsnghjtta4fT8L0yj2dVJrBqUnbQ4nGc8BZjbNpL2yrSayEWjDmvynSl1ioOc9NkdatxbJd2CIZyZ4LfwETz9X6hCjuSZFiVhDSC9pRKSez8hl9o3exdNkt3HTYLpk59mOsy2s7tx/MYav3TFbCsys0bVm4bjmJZODPJJNKyeeAkuoNKep8lhBe040pJZ6zIxDF18oOl2lWFUqvW9UGJCSzsbacKzvIyFyiaySZlNTU41jVlcNRbSV7Sd5deOI1ZYxNV60NsCpW7bdYpFwMNONzZLqtjGS2FFgfDYlrX1p5c86l0lhio2vJdN1pK1q22DUeTIt3DefSL9ZWs9pXFUPoxbztOnmePR5SDSoz+JEJLLBkSiPJHvIyDK37V1EX3jYlVZupi9rPeaYqxp2JbDhmTclPfuPfnHyHurTtRq3TV0yNR2KW4+g0OSVLM+bIywZp3HkSdkiIYJTNR6XP1Pl2M0jEmMztmvO7JbWS+4Mctxcpr4+/TWz4tl24ilxXDedcUpyQ6v7TjijMzP5mYxTQSyK5Z8m5HqwlrE+ebzOwf6Jkksn8hK2N+Ri+ot70ay6SUuqvKN1w9hiO2WXHVdREQiL3XY6plFnRG/tvxnG0+80mRCEtHqDqJp/Tp1JOhw5zL0pbrSicUSiJSjPfu7xfG9TrtQwmoO6dVP6OUZqJfPtmvZ69nOeHcMus7US2LqcRHps79+mkzXGWg0rRg8GRkZdA1Eqz2/AvWsSa7IuJLNPblR+YhsNqNRN8D2jyXvFvpD2olu0Nu336GzWTYZ5pqWlR4VuwW1wH5XZrhTKFesq1mqFUqjLiq2XOYLJcCPq7x8Fc19iUSGmVVbUqsRpZ4SpwyIj+4aktTbIdGLAlWhRawqc836dWJJyXEt/ZbM9rCS/3h8vJ6sqsWfb9Vg1pBE7JnreRs8DQZELXTdeG58RM2JZlYkRVEZk4jBlu+AvumOr1Nvm4JNFj0qZT5cdrnFofLBkWccMDOUpJLX4P2hcVpXdOuOzyZkRKirbl051RllWTM1JwXHf3DzdMO+r7p6qA7CboVPkFsynto+cUg+KU/8ABD69RtXKNZV2wbcnQn3XphoSlxBlgts8EJGiuJdZQ6ksEtJKLrwZCXcm2pJvTFnLXi0/TxVr0ZpKW0R+aQStxZznJnx4j77Opb1Psqn0moNtrcYjJadSW8lYLBlv4i/7hgtM1FpNQ1Ql2Qyojkxmds1GfE9+S+GAnZemE0bSB229cmLooeEUh9lxTrKjP804akngvfvGRWNQa+1f1erNwU5g0TF4YdyaubbIiwnB8N5GfxEmjF9S7xgWNbq63UGluMoURGSfeHkmmL632FOuWmUufbjUdqr0uWiQyZ+wRkSiNRbi6cDHtWbNvaq3pZtz0OPFefpLGZLTqzwbhmkzLhwzkSpZN0Uy7qBHrFJdJyM8na470n0kfeL8W8TZ4T+kWVqfqfVIaYEOiRIKnFpJ2QbivYTks43dWSEmU9lceCwwtW0ptBJMz6cDBb31KiW9edPtVmmyZ1RnJ2kJbMiLG/r9xjOYC3HY7brrCmVqSWUGZHshfi4zT6i4ABcAGXSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANPPyk3Gwf9o/2UaejcL8pNxsH/aP9lGno9HH+rhn+zpDyKDI+TJaRkWC/fv66+JkENcib+LHaP+u/rr4mUed3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5M8D0PJkJSoi15YcfplRJJY2oSsfJQ1N5N8pEHWejm5u2nybI+GTNRbhurqrCKTCLKcpW2ts/l/iNCFuvWhqeUxOSXBn86kujG1kZ/B6zzxY/Lm+PGulz7LcmMppxJKQ4nBkfAyMWSmWhb1OfjvRKZGaXGIyaNLZFs5LB46h9tqVNms25AqbCiUh9hKsl143/eLkQ6bsXW4j/UbT5FbeKrUWoO0msJTsc8gz2HE9S05La4dI151Tql3nTHac6/RpPMPEp52MlLTq9ksYPGT6hsNq/BuiofR0egvOx4pLNct1siNRERlu+O8RvZNuMXDckSLKiuyWIm05IN5skGZ7Rl0ceJcR348pJ245ztr3f8AejFUshFFlUtUepnLU66o2seyezgs9O8j3i76eahPRNNE2hTqHLqM5iSqSao5mWykjM+gj6xIfLhotLjQqRNjw2WH1uKbUptJJ2kpIjIt3vFz5CtMp67crM12KyqUbyEbS0kZkk9rdv6B39mPg5SfzWPTJF4W7Sn1/ukptHj1x3n+bJBPOpV9nhkjLgMyu7Ri6JCEVi3bumSLg3c+67INKVF1J3+wXHcL9qfbUK35qKnAhGcaSRocJKds0Lzn2SPhwH36PW/Xo1WZr6psoqdLj7L0SUr221ERmWOPWXSPNc3fx7ZHY1rylWk1HvWHCnVRbRsvvG2SjWjGMGfTuGYQokaFEbixGUMstp2UIQWCIvcP3M94/GY8mJEekuGWy2g1/IsjnvbfjJNtEOWJL57WOalC9o246Wzx15VuE7cmeO61btIZUR72dvPyGrOpNUVeuqU6oNrMymzsILHBO1/iN2NGKUUGBEawRHGjpR8yL+4cfzsv0xT8K951mN4rltWrU1w8k+cZexjjwGvnI9vKgQoM6g1JaY9ZelKcW88eFO5x7Jme8zLB7u8bOqSl1BpWkjSZYMjGteuXJ6dqNTk3RZMhUae4s3FxkqNJGrj7OOkejh8ZPFnkl3Kn+76JTrmtuVSKg027HktmXtFki3cS7xj+idBk21YkejSGjQqMpaUkfSW2oy+4xrBZOtl9ab1IqDeUGRKjM5S4l8vbSRdJH0/ExtvYN20m8bfYq9JkJdZcTkyL9A+owuNjUylffcdVjUWhzKrLXssxmVOKP3EZ4Gj98pummV6nasyi2mZk43oxYwpKEq9gs9RlgbFco+snLfotiRJKWnarKSqXk8bLCTSZ/Mtoh9urlBoNd0lk2vDlRDchxi9FMlF7KkJwkJGcptIto1Vmt21AqrBkbchhKyMj+f35Fm1iwemtcIy3HEc6M/omIs5Gl0uT7Wm2vKe23qU4aGyM9+xn+8xKOsu7TOuGR4/ejn9UxNap/WmoFoyrn0TrtHrzxuu0apMJccSgj5taFEkzI+jaLO74jdi0rgp1y0CLWKW8l1iQglFg+B9RjAaXZtOvrQulUSpNp/OQGubcxk21bBYPPxEGaW3XXNFNRn7MugllSX3cIcWfspI+Ci/AdLPPrFiX191J/KZ9u7bASZf+9D/FAnZojJpJGZnuED8oyUzKuXTuRGWh1l2pGpDiDySiyjeJ6QeUJyXQOeU07YZbivQNUNX7gRb/ACoqdUbnbUuissJSzzhZSlZmotos9W4/gNrzEc616W0jUmlIYkK9Hms5Nl8i3kfUfcGP3sy3rpm1FqkGsQG5tOkNyI7qCNK0KyXAYBAsNija1u3PTYRIYmw9mRspwknNrj8iIazyoerOiFXM2HJK6aSjSlzJrYUnvzwP4DYTQzW2lX8gqbM2YdYRu5rO5zvIauP9xymf9VcuVCX+Rir7WDPLeP8AeGNcixCS0jSRHu9JcMzPeedpQyXlQGk9GKuajMt7fD+kIm5LEXUCRpwlVuVCnMwjkLLZfztZ2jz+iY1LZho3rNtFIbaeYUwtBKStJpNJlxIxabPt2LbdKXToqiNpT6nEkRYJJHjd8MCNLphayoTEUufTHohSE+kEwZ7exno9khMqNkmUER43bhx31t2/2ahcq6I1M1yoUN5O0h1CSV0l+iNsaPHbjUeGwyhKG22UpSnG7gNTuVemQeulCOEtBSthHNk4eE59niJnJvWJFLQqOdEcVzZbBE4rJbt36I9GfeOLzYdWoo5alMplIqFFr1MSmNWHHVbZtFg1bOyZGeOO8zGxWls6ZPsGjyZ5mchcRs1mZcfZLeNRbo+k2dW2JWtLUz0VBkpo2iLmjMjzu4buA3NtebTahQYkqkONuQVNJ5k2+BJwWC+QxnP4unHldvlv6ux7atGo1mUokojsmad+MqPcRfMyGmT6Losi+rf1Gqrrm1W3CfdIzP2EKMjWk/gZieNeJrdw37blhJmoZjLe9LnmasFsESsJP4kQ/flHUagXNpdIjwZcYpFPTzsc0qLcSd5kXvIsCceOvpyZW/Ew0icxUaZGnx1ktqQ0lxJl1KLP7RrFygK2mj8oS3KhcDK3KPFTtFn7BZNRZ+ZjPuSLdSrh029Afd25dNc5lZmfAjzj7iGabaddeSNrysprtIOIszFRWDYzO4e4PpY5Jo0B9RyhuJWikqzTt8u06/S7zYT/2Q==";
const MODALIDADES = [
  { key: 'online', label: 'Online' },
  { key: 'diurno', label: 'Diurno' },
  { key: 'vespertino', label: 'Vespertino' },
];
const CARRERAS = [
  { n: 'ADMINISTRACIÓN PÚBLICA',                         modalidades: { online: 2000000, diurno: null,    vespertino: null } },
  { n: 'AUDITORÍA',                                      modalidades: { online: 1995000, diurno: null,    vespertino: null } },
  { n: 'CONTABILIDAD GENERAL',                           modalidades: { online: 1995000, diurno: null,    vespertino: null } },
  { n: 'INGENERÍA INDUSTRIAL',                           modalidades: { online: 1980000, diurno: null,    vespertino: null } },
  { n: 'INGENIERÍA EN ADMINISTRACIÓN DE EMPRESAS',        modalidades: { online: 2060000, diurno: 1980000, vespertino: 1995000 } },
  { n: 'INGENIERÍA EN CIENCIA DE DATOS',                 modalidades: { online: 2070000, diurno: null,    vespertino: null } },
  { n: 'INGENIERÍA EN CIBERSEGURIDAD',                   modalidades: { online: 2340000, diurno: 2220000, vespertino: 2390000 } },
  { n: 'INGENIERÍA EN CONECTIVIDAD Y REDES',             modalidades: { online: 2175000, diurno: 2220000, vespertino: 2470000 } },
  { n: 'INGENIERÍA EN FINANZAS',                         modalidades: { online: 1980000, diurno: null,    vespertino: null } },
  { n: 'INGENIERÍA EN INFORMÁTICA',                      modalidades: { online: 2240000, diurno: 2220000, vespertino: 2430000 } },
  { n: 'INGENIERÍA EN LOGÍSTICA',                        modalidades: { online: 2060000, diurno: 1980000, vespertino: 1995000 } },
  { n: 'INGENIERÍA EN MARKETING DIGITAL',                modalidades: { online: 1980000, diurno: null,    vespertino: null } },
  { n: 'INGENIERÍA EN PREVENCIÓN DE RIESGOS',            modalidades: { online: 1980000, diurno: null,    vespertino: null } },
  { n: 'INGENIERÍA EN RECURSOS HUMANOS',                 modalidades: { online: 1980000, diurno: null,    vespertino: null } },
  { n: 'INGENIERÍA EN SEGURIDAD PRIVADA',                modalidades: { online: 2060000, diurno: null,    vespertino: null } },
  { n: 'NATUROPATÍA',                                    modalidades: { online: null,     diurno: null,    vespertino: 1980000 } },
  { n: 'TÉCNICO EN ADMINISTRACIÓN DE EMPRESAS',           modalidades: { online: 2060000, diurno: 1980000, vespertino: 1995000 } },
  { n: 'TÉCNICO EN ADMINISTRACIÓN PÚBLICA',              modalidades: { online: 2000000, diurno: null,    vespertino: null } },
  { n: 'TÉCNICO EN CIENCIA DE DATOS',                    modalidades: { online: 2070000, diurno: null,    vespertino: null } },
  { n: 'TÉCNICO EN CIBERSEGURIDAD',                      modalidades: { online: 2340000, diurno: 2220000, vespertino: 2390000 } },
  { n: 'TÉCNICO EN CONECTIVIDAD Y REDES',                modalidades: { online: 2175000, diurno: 2220000, vespertino: 2470000 } },
  { n: 'TÉCNICO EN ENFERMERÍA',                          modalidades: { online: null,     diurno: 2090000, vespertino: 2110000 } },
  { n: 'TÉCNICO EN ENFERMERÍA E INSTRUMENTACIÓN QUIRÚRGICA', modalidades: { online: null, diurno: null,    vespertino: 1890000 } },
  { n: 'TÉCNICO EN FARMACIA',                            modalidades: { online: null,     diurno: null,    vespertino: 1980000 } },
  { n: 'TÉCNICO EN FINANZAS',                            modalidades: { online: 1980000, diurno: null,    vespertino: null } },
  { n: 'TÉCNICO EN INFRAESTRUCTURA CLOUD',               modalidades: { online: 1980000, diurno: null,    vespertino: null } },
  { n: 'TÉCNICO EN LOGÍSTICA',                           modalidades: { online: 2060000, diurno: 1980000, vespertino: 1995000 } },
  { n: 'TÉCNICO EN MARKETING DIGITAL',                   modalidades: { online: 1980000, diurno: null,    vespertino: null } },
  { n: 'TÉCNICO EN PREVENCIÓN DE RIESGOS',               modalidades: { online: 1980000, diurno: null,    vespertino: null } },
  { n: 'TÉCNICO EN PROGRAMACIÓN Y ANALISIS DE SISTEMAS', modalidades: { online: 2240000, diurno: 2220000, vespertino: 2430000 } },
  { n: 'TÉCNICO EN RECURSOS HUMANOS',                    modalidades: { online: 1980000, diurno: null,    vespertino: null } },
];

const elements = {
  carrera: document.getElementById('selCarrera'),
  preview: document.getElementById('previewSection'),
  tarjetaContainer: document.getElementById('tarjetaContainer'),
  notif: document.getElementById('notif'),
  beca: document.getElementById('chkBene'),
  dif: document.getElementById('chkDif'),
  botonesModalidad: MODALIDADES.map(({ key }) => document.getElementById(`btn-${key}`)),
  botonesCuotas: {
    10: document.getElementById('cq-10'),
    12: document.getElementById('cq-12'),
  },
};

let modSel = null;
let cuotasSel = 10;
let notifTimer = null;

function formatMoney(value) {
  return value == null ? '—' : `$${Math.round(value).toLocaleString('es-CL')}`;
}

function getCarrera() {
  if (elements.carrera.value === '') return null;
  const index = Number(elements.carrera.value);
  return Number.isInteger(index) && CARRERAS[index] ? CARRERAS[index] : null;
}

function resetModalidades() {
  modSel = null;
  elements.botonesModalidad.forEach((btn) => btn.classList.remove('active', 'disabled'));
}

function fillCarreras() {
  const fragment = document.createDocumentFragment();
  CARRERAS.forEach((carrera, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = carrera.n;
    fragment.appendChild(option);
  });
  elements.carrera.appendChild(fragment);
}

function actualizarModalidades() {
  resetModalidades();
  const carrera = getCarrera();
  if (!carrera) return;
  elements.botonesModalidad.forEach((boton) => {
    const key = boton.id.replace('btn-', '');
    if (carrera.modalidades[key] == null) {
      boton.classList.add('disabled');
    }
  });
}

function seleccionarModalidad(key) {
  const carrera = getCarrera();
  if (!carrera || !MODALIDADES.some((m) => m.key === key)) return;
  if (carrera.modalidades[key] == null) return;

  modSel = key;
  elements.botonesModalidad.forEach((boton) => {
    boton.classList.toggle('active', boton.id === `btn-${key}`);
  });
}

function seleccionarCuotas(cuotas) {
  cuotasSel = cuotas;
  Object.entries(elements.botonesCuotas).forEach(([valor, boton]) => {
    boton.classList.toggle('active', Number(valor) === cuotas);
  });
}

function generarTarjeta() {
  const carrera = getCarrera();
  if (!carrera) {
    return mostrarNotif('⚠️ Selecciona una carrera');
  }
  if (!modSel) {
    return mostrarNotif('⚠️ Selecciona una modalidad');
  }

  const arancelBase = carrera.modalidades[modSel];
  const tieneBeca = elements.beca.checked;
  const tieneDif = elements.dif.checked;
  const arancelFinal = tieneBeca ? Math.round(arancelBase * 0.7) : arancelBase;
  const mensual = Math.round(arancelFinal / cuotasSel);
  const modalidadEtiqueta = MODALIDADES.find((m) => m.key === modSel).label;

  const descuentoHtml = tieneBeca
    ? `
      <tr class="t-desc-row">
        <td colspan="2"><span class="t-desc-label">✓ Beca aplicada — Matrícula 100% + Arancel 30%</span></td>
        <td><span class="t-desc-label"><del style="color:#9ca3af;font-size:11px">${formatMoney(arancelBase)}</del><br>${formatMoney(arancelFinal)}</span></td>
        <td><span class="t-desc-label"><del style="color:#9ca3af;font-size:11px">${formatMoney(arancelBase / cuotasSel)}</del><br>${formatMoney(mensual)}</span></td>
        <td><span class="t-desc-label">—</span></td>
      </tr>`
    : '';

  const beneficiosHtml = tieneBeca
    ? `
      <div class="t-bene">
        <div class="t-bene-title">⭐ Beneficios exclusivos — cupos limitados</div>
        <ul>
          <li><strong>Solo 3 cupos disponibles</strong></li>
          <li><strong>Matrícula gratis</strong> (valor ref. $184.000)</li>
          <li><strong>Beca del 30%</strong> en arancel por toda la carrera</li>
        </ul>
      </div>`
    : '';

  const footerHtml = tieneDif
    ? `
      <div class="t-footer">
        <p>Si te matriculas hoy, tu primera cuota queda diferida para el <strong>05 de junio</strong> 🕐</p>
      </div>`
    : '';

  elements.tarjetaContainer.innerHTML = `
    <div class="tarjeta">
      <div class="t-header">
        <img class="t-logo-img" src="${LOGO}" alt="Instituto Profesional San Sebastián">
      </div>
      <div class="t-titlebar">
        <span class="t-title">${carrera.n}</span>
      </div>
      <div class="t-body">
        <table class="t-table">
          <thead>
            <tr>
              <th>Modalidad</th>
              <th>Matrícula</th>
              <th>Arancel Anual</th>
              <th>Mensualidad</th>
              <th>Cuotas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="t-badge">${modalidadEtiqueta}</span></td>
              <td><span class="t-green">$0</span></td>
              <td>
                <span class="t-green">${formatMoney(arancelFinal)}</span>
                ${tieneBeca ? `<span class="t-strike">${formatMoney(arancelBase)}</span>` : ''}
              </td>
              <td>
                <span class="t-green">${formatMoney(mensual)}</span>
                <span class="t-sub">por mes</span>
              </td>
              <td><span class="t-navy">${cuotasSel}</span></td>
            </tr>
            ${descuentoHtml}
          </tbody>
        </table>
        ${beneficiosHtml}
        ${footerHtml}
      </div>
    </div>`;

  elements.preview.classList.add('visible');
  elements.preview.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function mostrarCaptura() {
  mostrarNotif('📸 Windows: Win+Shift+S → selecciona la tarjeta | Mac: Cmd+Shift+4');
}

function mostrarNotif(text) {
  clearTimeout(notifTimer);
  elements.notif.textContent = text;
  elements.notif.style.display = 'block';
  notifTimer = setTimeout(() => {
    elements.notif.style.display = 'none';
  }, 4000);
}

function init() {
  fillCarreras();
  elements.carrera.addEventListener('change', actualizarModalidades);
  elements.botonesModalidad.forEach((boton) => {
    boton.addEventListener('click', () => seleccionarModalidad(boton.id.replace('btn-', '')));
  });
  elements.botonesCuotas[10].addEventListener('click', () => seleccionarCuotas(10));
  elements.botonesCuotas[12].addEventListener('click', () => seleccionarCuotas(12));
  document.querySelector('.btn-gen').addEventListener('click', generarTarjeta);
  document.querySelector('.btn-how').addEventListener('click', mostrarCaptura);
}

init();

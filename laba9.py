from nltk import FreqDist


def freq_dict(words):

    words = [word.lower() for word in words]
    word_num = len(words)
    fd = [(word, f/word_num)
          for (word, f)
          in FreqDist(words).most_common()]

    return fd